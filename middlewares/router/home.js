const router = require("koa-router")();

router
    .get("/", async (ctx, next) => {
        let {db} = ctx;
        let {blogModel} = db;
        let result = await blogModel.find({}, {id: 1, title: 1, _id: 0});
        result = result.map(model => {
            return model.toObject();
        })
        ctx.template("home", {
            articleList: result
        });
        await next();
    })

module.exports = router;