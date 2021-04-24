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
import { schema } from "./data/schema";
import Context from "./data/context";

const SSLKey = fs.readFileSync(env.SSL_KEY_PATH, { encoding: "utf-8" });
const SSLCert = fs.readFileSync(env.SSL_CERT_PATH, { encoding: "utf-8" });

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
if(env.isDevelopment) {
  router.get("/playground", graphqlPlayground({ endpoint: "/graphql" }));
}
router.all(
  "/graphql",
  graphqlHTTP((req) => ({
    schema,
    context: new Context(req),
    graphiql: false,
    pretty: !env.isProduction,
    customFormatErrorFn: (err: unknown) => {
      console.error(err);
      return err;
    }
  }))
);
router.get(
  /.*/,
  spaEnterPoint({
    exclude: ["/playground", "/graphql"]
  })
);

// configuration
app
  .use(koaLogger())
  .use(compress())
  .use(staticFile())
  .use(bodyParser())
  .use(router.routes());

/**
 * 启动博客
 * @param port 端口号
 * @param callback 启动成功回调
 * @returns {Koa} koa实例
 */
export function launch(port: number, callback: () => void) {
  server.listen(port, callback);
  process.once("SIGHUP", function () {
    server.close(() => {
      process.exit(0);
    });
  });
  return app;
}
