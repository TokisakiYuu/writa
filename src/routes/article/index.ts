/**
 * 文章页
 */

import Koa from "koa";
import Router from "koa-router";
import * as markdown from "../../lib/markdown";
import WebConfig from '../../../web.config';

const uploadDir = WebConfig.upload?.dir;

const router = new Router();

router
    .get("/", async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
        ctx.sendHTML("article", {
            content: markdown.renderFile(`${uploadDir}/markdown/markdown.md`)
        });
    })

export default router.routes();