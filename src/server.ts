import { listenStart } from "./app";
import log from "./util/logger";

/**
 * listen port
 */
const server = listenStart(port => {
  log.info(`App is running at https://localhost:${port} in ${process.env.NODE_ENV !== "production"? "development" : "production"} mode`);
  log.info("Press CTRL-C to stop\n");
});

export default server;
