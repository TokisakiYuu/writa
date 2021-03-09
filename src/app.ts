import fs from "fs";
import http2 from "http2";
import Koa from "koa";
import Router from "koa-router";
import staticFile from "./config/koa-static";
import compress from "./config/koa-compress";
import bodyParser from "koa-bodyparser";
import koaLogger from "koa-logger";
import env from "./util/environment";

// Controllers (route handlers)
import { spaEnterPoint } from "./controllers/spa";
import graphqlPlayground from "graphql-playground-middleware-koa";
import graphqlHTTP from "koa-graphql";
import schema from "./data/types/Schema";

const SSLKey = fs.readFileSync(env.SSL_KEY_PATH, { encoding: "utf-8" });
const SSLCert = fs.readFileSync(env.SSL_CERT_PATH, { encoding: "utf-8" });
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
if(env.isDevelopment) {
  router.get("/playground", graphqlPlayground({ endpoint: graphqlEndpointPath }));
}

// configuration
app
  .use(koaLogger())
  .use(compress())
  .use(staticFile())
  .use(bodyParser())
  .use(router.routes());

export function launch(port: number, callback: () => void) {
  server.listen(port, callback);
  return app;
}
