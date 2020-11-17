import fs from "fs";
import {resolve} from "path";
import { distDir } from "./frontend/assets.config";

let sslKey, sslCert;
try {
  sslKey = fs.readFileSync(resolve(__dirname, "./assets/secret/localhost+2-key.pem")).toString();
  sslCert = fs.readFileSync(resolve(__dirname, "./assets/secret/localhost+2.pem")).toString();
} catch (error) {
  console.warn("[Web Config] if you want to enable http2, need to generate ssl certificate");
}

const config: WebConfig = {
  domain: ["localhost", "127.0.0.1", "::1"],
  httpsPort: 18236,
  httpPort: 80,
  ssl: {
    key: sslKey,
    cert: sslCert,
  },
  publicPathMap: {
    "/static": distDir,
    "/source": distDir + "/resource",
    "/nmodules": __dirname + "/frontend/node_modules"
  }
}

export default config;