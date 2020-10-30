const fs = require("fs");
const {resolve} = require("path");

module.exports = {
  domain: ["localhost", "127.0.0.1", "::1"],
  port: 443,
  ssl: {
    key: fs.readFileSync(resolve(__dirname, "../assets/localhost+2-key.pem")),
    cert: fs.readFileSync(resolve(__dirname, "../assets/localhost+2.pem")),
    redirectToHttps: true                                                           // 如果是http协议则重定向到https协议
  }
}