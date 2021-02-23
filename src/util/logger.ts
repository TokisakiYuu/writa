import console from "console";
import loglevel from "loglevel";
import colors from "colors";

const isProductionMode = process.env.NODE_ENV === "production";
const levels = loglevel.levels;

const log = loglevel.getLogger("Yuulog");

log.methodFactory = function(methodName, logLevel, loggerName) {
  return function (message) {
    let effect = "";
    if(methodName === "trace") {
      effect += colors.bgBlue(" ") + " " + colors.bold(message);
    } else if(methodName === "debug") {
      effect += colors.bgCyan(" ") + " " + message;
    } else if(methodName === "info") {
      effect += colors.bgGreen(" ") + " " + colors.italic(message);
    } else if(methodName === "warn") {
      effect += colors.bgYellow(" ") + " " + colors.yellow(message);
    } else if(methodName === "error") {
      effect += colors.bgRed(" ") + " " + colors.red(message);
    }
    effect += " ";
    console.log(effect);
  };
};

log.setLevel(isProductionMode ? levels.INFO : levels.TRACE);

export default log;
