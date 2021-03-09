import logger from "./logger";
import dotenv from "dotenv";
import { cleanEnv, str, port, url } from "envalid";
import fs from "fs";
import path from "path";

const envPath = path.resolve(__dirname, "../../.env");
const envExamplePath = path.resolve(__dirname, "../../.env.example");

if (fs.existsSync(path.resolve(__dirname, "../../.env"))) {
  logger.debug("Using .env file to supply config environment variables");
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

// console.log(typeof result.PORT, result.PORT);

// export const ENVIRONMENT = process.env.NODE_ENV;

// export const SESSION_SECRET = process.env["SESSION_SECRET"];
// export const MONGODB_URI = process.env["MONGODB_URI"];
// export const SSL_KEY_PATH = process.env["SSL_KEY_PATH"];
// export const SSL_CERT_PATH = process.env["SSL_CERT_PATH"];
// export const PORT = process.env["PORT"];

// if (!SESSION_SECRET) {
//   logger.error("No client secret. Set SESSION_SECRET environment variable.");
//   process.exit(1);
// }

// if (!MONGODB_URI) {
//   logger.error("No mongo connection string. Set MONGODB_URI environment variable.");
//   process.exit(1);
// }

// if (!fs.existsSync(SSL_KEY_PATH)) {
//   logger.debug("Dose not exist SSL key file");
//   process.exit(1);
// }

// if (!fs.existsSync(SSL_CERT_PATH)) {
//   logger.debug("Dose not exist SSL cert file");
//   process.exit(1);
// }
