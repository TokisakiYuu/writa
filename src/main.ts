import {createServer} from "./lib/server";
import webConfig from "../web.config";
import router from "./middleware/router";
import logger from "./middleware/logger";
import resource from "./middleware/static";
import serverPush from "./middleware/serverPush";
import { distDir } from "../frontend/assets.config";

(async () => {
    const {app, port, isHttp2} = await createServer(webConfig);
    app
        .use(logger())
        // HTTP/2 Server Push support
        .use(serverPush({root: distDir}))
        // http request handers
        .use(router())
        // web app public assets transfer
        .use(resource())
    console.log(`Server(${isHttp2? 'http2':'http'}) is listening port ${port} ...`);
})();