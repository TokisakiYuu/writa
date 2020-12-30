import errorHandler from "koa-better-error-handler";
import app, { listenStart } from "./app";

/**
 * Error Handler. Provides full stack
 */
// override koa's undocumented error handler
app.context.onerror = errorHandler();
// specify that this is our api
app.context.api = true;

const isDev = process.env.NODE_ENV === "development";

/**
 * listen port
 */
const server = listenStart(port => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        port,
        isDev? "development" : "production"
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;