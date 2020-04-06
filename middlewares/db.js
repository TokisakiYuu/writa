const mongoose = require('mongoose')
const schemas = require("../models")

/**
 * 连接到数据库
 * @see https://mongoosejs.com/docs/connections.html#connections
 */
mongoose.connect('mongodb://127.0.0.1:27017', {
    dbName: "yuulog",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
});

/**
 * 连接失败事件
 */
mongoose.connection.on('error', err => {
    throw err;
});


module.exports = async function(ctx, next) {
    ctx.db = schemas;
    await next();
}