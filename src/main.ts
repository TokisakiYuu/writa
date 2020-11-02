import {createYuuLogServer} from "./lib/server";
import webConfig from "../web.config";
import router from "./middleware/router";
import logger from "./middleware/logger";
import template from "./middleware/template";

(async () => {
    const app = await createYuuLogServer(webConfig);
    app
        .use(logger())
        .use(template())
        .use(router())
    console.log(`YuuLog 服务器已经启动 端口: ${webConfig.httpsPort}`);
})();