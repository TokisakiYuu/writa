import { listenStart } from "./app";

/**
 * listen port
 */
const server = listenStart(port => {
    console.log(
        "  App is running at https://localhost:%d in %s mode",
        port,
        process.env.NODE_ENV !== "production"? "development" : "production"
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;
