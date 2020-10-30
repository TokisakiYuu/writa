import fs from "fs";
import {resolve} from "path";
import http from "http";
import http2 from "http2";
import Koa from "koa";

const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Koa';
});


const httpServer = http.createServer(app.callback());

const server = http2.createSecureServer({
  key: fs.readFileSync(resolve(__dirname, "../assets/localhost+2-key.pem")),
  cert: fs.readFileSync(resolve(__dirname, "../assets/localhost+2.pem")),
  allowHTTP1: true
}, app.callback());

server.listen(443, () => {
  console.log("服务器已启动");
});
