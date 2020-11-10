/**
 * Home
 */

import Koa from "koa";
import Router from "koa-router";

const router = new Router();

router
    .get("/", async (ctx:Koa.Context, next:Koa.Next) => {
        ctx.push("/css/shell.css").to("/static/css/shell.css");
        await ctx.sendHTML("index", {author: "tokisakiyuu", email: "tokisakiyuu@qq.com"});
        return next();
    })
export default router.routes();