const { Schema, model } = require('mongoose')

let blogSchema = new Schema({
    // 文章id
    id: {
        type: Number,
        index: true,
        unique: true
    },
    // 文章标题
    title: {
        type: String,
        index: true
    },
    // 文章作者
    author: String,
    // 文章内容
    body:   String,
    // 文章的创建日期
    date: {
        type: Date,
        default: Date.now
    },
    // 是否显示文章
    hidden: {
        type: Boolean,
        default: false
    },
    // 点赞数
    votes: {
        type: Number,
        default: 0
    },
});

module.exports = model("blog", blogSchema);