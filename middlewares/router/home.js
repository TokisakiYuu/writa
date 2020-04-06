const router = require("koa-router")();

router
    .get("/", async (ctx, next) => {
        ctx.template("home", {
            content: "你好，欢迎来到Yuulog！"
        });
        await next();
    })

module.exports = router;