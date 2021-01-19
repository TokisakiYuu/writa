import { listenStart } from "./app";

const isDev = process.env.NODE_ENV === "development";

/**
 * listen port
 */
const server = listenStart(port => {
    console.log(
        "  App is running at https://localhost:%d in %s mode",
        port,
        isDev? "development" : "production"
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;