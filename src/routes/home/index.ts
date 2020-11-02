/**
 * 主页
 */

import Koa from "koa";
import Router from "koa-router";

const router = new Router();

router
    .get("/", async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
        ctx.body = "this home - YuuLog";
        return next();
    })

export default router.routes();