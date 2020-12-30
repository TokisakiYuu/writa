import fs from "fs";
import http2 from "http2";
import Koa, { Context, Next } from "koa";
import { SSL_KEY_PATH, SSL_CERT_PATH, PORT } from "./util/secrets";

const SSLKey = fs.readFileSync(SSL_KEY_PATH, { encoding: "utf-8" });
const SSLCert = fs.readFileSync(SSL_CERT_PATH, { encoding: "utf-8" });

/**
 * create Http/2 Server
 */
const app = new Koa();
const server = http2.createSecureServer({
    key: SSLKey,
    cert: SSLCert,
    allowHTTP1: true
}, app.callback());

app.use(async (ctx: Context, next: Next) => {
  ctx.body = "你好";
  return next();
});

export default app;
export function listenStart(callback: (port: number) => void) {
  const port = Number(PORT);
  server.listen(port, () => callback(port));
  return server;
}