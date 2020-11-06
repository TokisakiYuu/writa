import Koa from "koa";
import Router from "koa-router";
import { resolve } from "path";
import mount from "koa-mount";
import serve from "koa-static";
import webConfig from "../../web.config";
const { publicPathMap } = webConfig;

// TODO: #3 (!!项目已无法正常运行) 添加静态目录映射配置，并实现批量挂载 @TokisakiYuu
export default function() {
  const mergeApp = new Router();
  for(let rootName in publicPathMap) {
    let publicPath = publicPathMap[rootName];
    const resourceApp = new Koa();
    resourceApp.use(serve(resolve(publicPath)))
    mergeApp.use(
      "/",
      mount(
        rootName,
        resourceApp
      )
    );
  }
  return mergeApp.routes();
}