const router = require("koa-router")();

router
    .get("/", async (ctx, next) => {
        ctx.template("editor");
        await next();
    })

module.exports = router;