import fs from "fs";
import http from "http";
import http2, { ServerHttp2Stream } from "http2";
import Koa from "koa";
import mime from "mime";

const { HTTP2_HEADER_PATH } = http2.constants;

// 向http2流推送文件数据
function push(stream: ServerHttp2Stream, url: string, path: string) {
  if(!stream.pushAllowed) return;
  stream.pushStream({ [HTTP2_HEADER_PATH]: url }, (err, pushStream) => {
    if(err) return console.error(err);
    if(pushStream.aborted || pushStream.closed) return;
    const {fileDescriptor, headers} = getFileDescriptor(path);
    if(!fileDescriptor) return;
    pushStream.respondWithFD(fileDescriptor, headers);
    pushStream.on("close", () => fs.closeSync(fileDescriptor));
    pushStream.on("error", (err) => {
      console.error(err);
      pushStream.close();
    })
  })
}

// 获取文件描述符和响应头
function getFileDescriptor(path: string): {fileDescriptor: number | null, headers: any} {
  let fileDescriptor: number;
  try {
    fileDescriptor = fs.openSync(path, "r");
  } catch (error) {
    console.error(error);
    return {fileDescriptor: null, headers: null};
  }
  const stat = fs.fstatSync(fileDescriptor);
  const contentType = mime.getType(path);
  return {
    fileDescriptor,
    headers: {
      'content-length': stat.size,
      'last-modified': stat.mtime.toUTCString(),
      'content-type': contentType
    }
  }
}

export default function() {
  return async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
    let nodeRes: http2.Http2ServerResponse | http.ServerResponse = ctx.res;
    ctx.push = function(url: string, filePath: string) {
      if(nodeRes instanceof http.ServerResponse) return;
      return push(nodeRes.stream, url, filePath);
    }
    return next();
  }
}