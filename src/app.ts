import fs from "fs";
import http2 from "http2";
import Koa from "koa";
import Router from "koa-router";
import staticFile from "./config/koa-static";
import compress from "./config/koa-compress";
import bodyParser from "koa-bodyparser";
import { SSL_KEY_PATH, SSL_CERT_PATH, PORT } from "./util/secrets";

// Controllers (route handlers)
import { SPA } from "./controllers/spa";
import { graphqlServer } from "./controllers/graphql";

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

// routes
const router = new Router();
router.post("/graphql", graphqlServer);
router.get(/.*/, SPA);

// configuration
app
  .use(compress())
  .use(staticFile())
  .use(bodyParser())
  .use(router.routes());

export default app;
export function listenStart(callback: (port: number) => void) {
  const port = Number(PORT);
  server.listen(port, () => callback(port));
  return server;
}
