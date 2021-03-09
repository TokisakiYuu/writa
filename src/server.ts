import { launch } from "./app";
import log from "./util/logger";
import env from "./util/environment";

launch(env.PORT, () => {
  log.info(`App is running at https://localhost:${env.PORT} in ${env.isDev? "development" : "production"} mode`);
  log.info("Press CTRL-C to stop\n");
});
