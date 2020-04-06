const mongoose = require('mongoose')
const { Schema } = mongoose;

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
    hidden: Boolean,
    // 其它数据
    meta: {
        // 点赞数
        votes: Number,
        // 收藏数
        favs:  Number
    }
});

module.exports = mongoose.model("blog", blogSchema);