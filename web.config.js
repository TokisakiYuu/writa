const fs = require("fs");
const {resolve} = require("path");

let sslKey, sslCert;
try {
  sslKey = fs.readFileSync(resolve(__dirname, "./assets/secret/localhost+2-key.pem")).toString();
  sslCert = fs.readFileSync(resolve(__dirname, "./assets/secret/localhost+2.pem")).toString();
} catch (error) {
  console.warn("[Web Config] if you want to enable http2, need to generate ssl certificate");
}

module.exports = {
  domain: ["localhost", "127.0.0.1", "::1"],
  httpsPort: 443,
  httpPort: 80,
  ssl: {
    key: sslKey,
    cert: sslCert,
  }
}