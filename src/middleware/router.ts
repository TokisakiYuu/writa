import Router from "koa-router";
import home from "../routes/home";
import article from "../routes/article";

const siteMap: Map<string, Router.IMiddleware> = new Map([
    ["/",       home],      // 网站主页
    ["/a",      article]    // 网站文章页
]);

export default function() {
    const router = new Router();
    for(let [path, routes] of siteMap) {
        router.use(path, routes);
    }
    return router.routes();
}