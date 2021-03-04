import fs from "fs";
import http2 from "http2";
import Koa from "koa";
import Router from "koa-router";
import staticFile from "./config/koa-static";
import compress from "./config/koa-compress";
import bodyParser from "koa-bodyparser";
import { SSL_KEY_PATH, SSL_CERT_PATH, PORT, ENVIRONMENT } from "./util/secrets";

// Controllers (route handlers)
import { spaEnterPoint } from "./controllers/spa";
import graphqlPlayground from "graphql-playground-middleware-koa";
import graphqlHTTP from "koa-graphql";
import schema from "./data/types/Schema";

const isDevelopment = ENVIRONMENT !== "production";
const SSLKey = fs.readFileSync(SSL_KEY_PATH, { encoding: "utf-8" });
const SSLCert = fs.readFileSync(SSL_CERT_PATH, { encoding: "utf-8" });
const graphqlEndpointPath = "/graphql";

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
router
  .all(graphqlEndpointPath, graphqlHTTP({ schema }))
  .get(/.*/, spaEnterPoint({
    exclude: ["/playground", graphqlEndpointPath]
  }));
if(isDevelopment) {
  router.get("/playground", graphqlPlayground({ endpoint: graphqlEndpointPath }));
}

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
