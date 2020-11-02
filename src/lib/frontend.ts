import {
    assetsConfig,
    buildDev,
    buildProd,
    buildWatch
} from "../../frontend";

const startMode = process.env.NODE_ENV;

export function attachFrontend() {
    if(startMode === "development") {
        buildWatch();
    }else if(startMode === "production") {
        buildProd();
    }
}
