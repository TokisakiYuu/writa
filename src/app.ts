import fs from "fs";
import path from "path";
import http2 from "http2";
import Koa, { Context, Next } from "koa";
import Router from "koa-router";
import staticFile from "koa-static";
import compress from "koa-compress";
import zlib from "zlib";
import { SSL_KEY_PATH, SSL_CERT_PATH, PORT } from "./util/secrets";
const { Z_SYNC_FLUSH } = zlib.constants;

// Controllers (route handlers)
import * as homeContoller from "./controllers/home";

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

/**
 * 路由
 */
const router = new Router();
router.get("/", homeContoller.index);

// configuration
app
  .use(compress({
    gzip: { flush: Z_SYNC_FLUSH },
    deflate: { flush: Z_SYNC_FLUSH },
    br: false
  }))
  .use(staticFile(path.resolve(__dirname, "./public"), {
    maxage: process.env.NODE_ENV === "production" ? (7 * 24 * 60 * 60 * 1000) : 0
  }))
  .use(router.routes());

export default app;
export function listenStart(callback: (port: number) => void) {
  const port = Number(PORT);
  server.listen(port, () => callback(port));
  return server;
}