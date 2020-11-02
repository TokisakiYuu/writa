import http2 from "http2";
import http from "http";
import Koa from "koa";

interface SSLOptions {
    key: string,
    cert: string
}

interface YuuLogWebConfig {
    domain?: string[],
    httpsPort: number,
    httpPort: number,
    ssl: SSLOptions
}

// 创建http2的Koa实例
export async function createHTTP2ServerApp(port: number, ssl:SSLOptions): Promise<Koa> {
    return new Promise((resolve, reject) => {
        const app = new Koa();
        const server = http2.createSecureServer({
            key: ssl.key,
            cert: ssl.cert,
            allowHTTP1: true
        }, app.callback());
        server.listen(port, () => resolve(app));
    });
}

// 创建http的Koa实例
export async function createHTTPApp(port: number): Promise<Koa> {
    return new Promise((resolve, reject) => {
        const app = new Koa();
        const server = http.createServer(app.callback());
        server.listen(port, () => resolve(app));
    });
}

export async function createYuuLogServer(webConfig: YuuLogWebConfig): Promise<Koa> {
    let {httpPort, httpsPort, ssl} = webConfig;
    const YuuLogApp = await createHTTP2ServerApp(httpsPort, ssl);
    const httpApp   = await createHTTPApp(httpPort);
    httpApp.use(ctx => ctx.redirect(`https://${ctx.host}${ctx.url}`));
    return YuuLogApp;
}