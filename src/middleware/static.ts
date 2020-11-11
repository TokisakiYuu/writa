import Koa from "koa";
import Router from "koa-router";
import { resolve } from "path";
import mount from "koa-mount";
import serve from "koa-static";
import webConfig from "../../web.config";
const { publicPathMap } = webConfig;

const mounts: Koa.Middleware[] = [];

export default function() {
  for(let rootName in publicPathMap) {
    let publicPath = publicPathMap[rootName];
    const resourceApp = new Koa();
    resourceApp.use(serve(resolve(publicPath)))
    mounts.push(mount(rootName, resourceApp));
  }

  return async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
    let curr: number = 0;
    let middle = mounts[curr];
    async function upstream(): Promise<void> {
      middle = mounts[++curr];
      if(typeof middle !== "function") return;
      return await middle(ctx, upstream);
    }
    await middle(ctx, upstream);
    return next();
  }
}