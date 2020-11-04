import koa from "koa";
import { resolve } from "path";
import mount from "koa-mount";
import serve from "koa-static";
import { assetsConfig } from "../../frontend";

const PUBLIC_ROOT = "/static"
let staticPath = resolve(assetsConfig.distDir);

export default function() {
  const resourceApp = new koa();
  resourceApp.use(serve(staticPath));
  return mount(PUBLIC_ROOT, resourceApp);
}