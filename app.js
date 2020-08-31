const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
// middlewares
const router = require("./middlewares/router");

const app = new Koa();
app
// 静态页面
    .use(serve(path.resolve(__dirname, "resources")))
    .use(serve(path.resolve(__dirname, "dist")))
// 解析POST方法过来的数据
    .use(bodyParser())
// 页面路由
    .use(router.routes())


module.exports = () => {
    app.listen(3000, () => console.log("服务已启动 端口:3000"));
}