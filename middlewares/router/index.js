const router = require("koa-router")();
const htmlRender = require("../../tools/render");
const home = require('./home');

// 加载本文件夹下的所有路由器
const subRouters = require('../../requireFolder')(__dirname);

router
    // 挂载渲染函数、设置content-type
    .use(async (ctx, next) => {
        let nextLayer = true;
        // 返回使用一个模版并返回渲染结果
        ctx.template = (sign, data) => {
            ctx.body = htmlRender(sign, data);
            ctx.type = "text/html;charset=utf-8";
            nextLayer = true;
        };
        // 返回一份json数据
        ctx.retJson = (data) => {
            ctx.body = data;
            ctx.type = "application/json;charset=utf-8";
            nextLayer = true;
        }

        return nextLayer
            ? next()
            : ctx.end();
    })
    .use("/", home.routes());

// 挂载页面路由
Object.keys(subRouters).map(name => {
    router.use(`/${name}`, subRouters[name].routes());
});

module.exports = router;