import Koa from "koa";

export default function() {
    return async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
        let { method, url } = ctx;
        let startTime = Date.now();
        await next();
        let endTime = Date.now();
        console.log(`[${method.toUpperCase()}] ${ctx.status} ${url} ${endTime - startTime}ms`);
    }
}