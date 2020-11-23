/**
 * 文章页
 */

import Koa from "koa";
import Router from "koa-router";
import { renderToHTML } from "../../lib/markdown";

const router = new Router();

router
    .get("/", async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
        ctx.sendHTML("article", {
            content: renderToHTML()
        });
    })

export default router.routes();