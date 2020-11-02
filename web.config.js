const fs = require("fs");
const {resolve} = require("path");

module.exports = {
  domain: ["localhost", "127.0.0.1", "::1"],
  httpsPort: 443,
  httpPort: 80,
  ssl: {
    key: fs.readFileSync(resolve(process.cwd(), "./assets/secret/localhost+2-key.pem")).toString(),
    cert: fs.readFileSync(resolve(process.cwd(), "./assets/secret/localhost+2.pem")).toString(),
  }
}