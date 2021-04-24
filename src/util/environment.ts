import logger from "./logger";
import dotenv from "dotenv";
import { cleanEnv, str, port, url } from "envalid";
import fs from "fs";
import path from "path";

const envPath = path.resolve(__dirname, "../../.env");
const envExamplePath = path.resolve(__dirname, "../../.env.example");

if (fs.existsSync(path.resolve(__dirname, "../../.env"))) {
  dotenv.config({ path: envPath });
} else {
  logger.debug("Using .env.example file to supply config environment variables");
  dotenv.config({ path: envExamplePath });  // you can delete this after you create your own .env file!
}

export default cleanEnv(process.env, {
  MONGODB_URI:     url({ desc: "mongodb uri" }),
  SESSION_SECRET:  str(),
  PORT:            port({ desc: "http server port", default: 10086 }),
  SSL_KEY_PATH:    str({ desc: "SSL key" }),
  SSL_CERT_PATH:   str({ desc: "SSL cert" }),
  NODE_ENV:        str({ choices: ["development", "test", "production"], default: "development" }),
});
