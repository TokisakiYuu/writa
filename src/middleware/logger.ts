import Koa from "koa";

export default function() {
    return async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
        let { method, url } = ctx;
        await next();
        console.log(`[${method.toUpperCase()}] ${ctx.status} ${url}`);
    }
}