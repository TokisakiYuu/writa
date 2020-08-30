const router = require("koa-router")();

router
    .get("/:id", async (ctx, next) => {
        let {id} = ctx.params;
        let {blogModel} = ctx.db;
        let article = await blogModel.findOne({id: id});
        ctx.template("article", {
            article: article.toObject()
        });
    })
    // 存储一篇新文章
    .post("/save_new_article", async (ctx, next) => {
        let {db, request} = ctx;
        let {blogModel, counterModel} = db;
        let {body} = request;
        let id = await counterModel.systeUniqueID("article");
        const newArticle = new blogModel({
            id,
            title: body.title,
            author: "有鱼",
            body: body.content
        })
        await newArticle.save();
        console.log(`新增一篇文章 id: ${id}`);
        ctx.retJson({result: "ok"});
    })

module.exports = router;