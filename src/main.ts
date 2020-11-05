import {createServer} from "./lib/server";
import webConfig from "../web.config";
import router from "./middleware/router";
import logger from "./middleware/logger";
import resource from "./middleware/static";
import serverPush from "./middleware/serverPush";

(async () => {
    const {app, port, isHttp2} = await createServer(webConfig);
    app
        // 日志
        .use(logger())
        // 服务器推支持
        .use(serverPush())
        // 路由
        .use(router())
        // 静态资源
        .use(resource())
    console.log(`Server(${isHttp2? 'http2':'http'}) is listening port ${port} ...`);
})();
