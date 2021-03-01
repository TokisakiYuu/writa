/**
 * 这些仅用于浏览器环境，这个脚本会被webpack打包并在浏览器端执行，所以全部使用同步代码
 */

import React from "react";
import ReactDOM from "react-dom";
import { initStore, AppStatusData } from "./store";
import Layout from "./theme/template/Layout";

declare const _DATA_: AppStatusData;
initStore(_DATA_);
const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const rootElement = document.getElementById("root");
ReactDOM.hydrate(<Layout />, rootElement, () => {
  if(isDevelopment) {
    console.log(
      "[ReactDOM]%c React DOM is active ⚙️\n %c init data",
        "color: yellow",
        "color: rgb(133, 255, 85)",
      _DATA_
    );
  } else {
    console.log("[ReactDOM]%c React DOM is active ⚙️", "color: yellow");
  }
});
