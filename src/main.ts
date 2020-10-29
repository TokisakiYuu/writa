import fs from "fs";
import {resolve} from "path";
import http from "http";
import http2 from "http2";
import Koa from "koa";

const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

http.createServer(app.callback()).listen(8442);

http2.createSecureServer({
  key: fs.readFileSync(resolve(__dirname, "../assets/privkey.pem")),
  cert: fs.readFileSync(resolve(__dirname, "../assets/server.pem")),
}, app.callback()).listen(443);
