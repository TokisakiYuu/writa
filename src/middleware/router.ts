import Router from "koa-router";
import template from "./template";
import resource from "../middleware/static";
import home from "../routes/home";
import article from "../routes/article";

const siteMap: Map<string, Router.IMiddleware> = new Map([
    ["/",       home],      // 网站主页
    ["/a",      article]    // 网站文章页
]);

export default function() {
    const router = new Router();
    // 静态资源
    // router.use(resource());
    // 挂在html模板， ctx.senHTML调用
    router.use(template());
    for(let [path, routes] of siteMap) {
        router.use(path, routes);
    }
    return router.routes();
}