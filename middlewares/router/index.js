const router = require("koa-router")();
const htmlRender = require("../../tools/render");
const home = require('./home');

// 加载本文件夹下的所有路由器
const subRouters = require('../../requireFolder')(__dirname);

router
    // 挂载html模版渲染函数、设置content-type
    .use(async (ctx, next) => {
        ctx.template = (sign, data) => {
            ctx.body = htmlRender(sign, data);
        };
        await next();
        ctx.type = "text/html;charset=utf-8";
    })

// 挂载页面路由
Object.values(subRouters).forEach(subRouter => {
    router.use(subRouter.routes())
})


module.exports = router;