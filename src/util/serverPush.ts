import mime from "mime";
import { ServerHttp2Stream, constants } from "http2";
import getByteLength from "utf8-byte-length";

const { HTTP2_HEADER_PATH } = constants;

// 推送
function serverPush(stream: ServerHttp2Stream, options: {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any | Buffer;
  headers?: {
    [name: string]: string;
  };
}): boolean {
  const { url, content, headers } = options;
  if(!stream.pushAllowed) return false;
  stream.pushStream({ [HTTP2_HEADER_PATH]: url }, (err, pushStream) => {
    if(err) {
      return console.error(err);
    }
    if(content instanceof String) {
      const json = JSON.stringify(content);
      pushStream.respond({
        "content-type": "application/json",
        "content-length": getByteLength(json),
        ...headers,
      });
      pushStream.end(json, "utf-8");
    } else if(content instanceof Buffer) {
      pushStream.respond({
        "content-type": mime.getType(url),
        "content-length": content.length,
        ...headers,
      });
      pushStream.end(content);
    }
  });
}

export default serverPush;