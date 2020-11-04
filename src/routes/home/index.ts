/**
 * 主页
 */
import { resolve } from "path";
import Koa from "koa";
import Router from "koa-router";
import { distDir } from "../../../frontend/assets.config";

const router = new Router();

router
    .get("/", async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
        ctx.push("/static/css/shell.css", resolve(distDir, "css/shell.css"));
        await ctx.sendHTML("index", {author: "tokisakiyuu", email: "tokisakiyuu@qq.com"});
        return next();
    })
export default router.routes();