import {
    assetsConfig,
    buildDev,
    buildProd,
    buildWatch
} from "../../frontend";

const developmentMode = process.argv.includes("development");

export function attachFrontend() {
    if(developmentMode) {
        buildWatch();
    }else {
        buildProd();
    }
}
