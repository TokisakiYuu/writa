import Koa from "koa";

export default function() {
    return async (ctx:Koa.ParameterizedContext, next:Koa.Next) => {
        return next();
    }
}