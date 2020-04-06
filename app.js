const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const { db, router } = require('./middlewares');

const app = new Koa();

// 数据库
app.use(db);
// 静态页面
app
    .use(serve(path.resolve(__dirname, "resources")))
    .use(serve(path.resolve(__dirname, "dist")))
// 页面路由
    .use(router.routes())


module.exports = () => {
    app.listen(3000, () => console.log("服务已启动 端口:3000"));
}