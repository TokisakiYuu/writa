/**
 * 主页
 */

import Koa from "koa";
import Router from "koa-router";

const router = new Router();

router
    .get("/", async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
        await ctx.sendHTML("index", {author: "tokisakiyuu", email: "tokisakiyuu@qq.com"});
    })
export default router.routes();