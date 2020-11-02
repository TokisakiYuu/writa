import {createYuuLogServer} from "./lib/server";
import webConfig from "../web.config";
import router from "./middleware/router";
import logger from "./middleware/logger";
import { attachFrontend } from "./lib/frontend";

(async () => {
    attachFrontend();
    const app = await createYuuLogServer(webConfig);
    app
        .use(router())
        .use(logger())
    console.log(`YuuLog 服务器已经启动 端口: ${webConfig.httpsPort}`);
})();