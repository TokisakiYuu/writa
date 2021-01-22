import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const _DATA_: any;
const rootElement = document.getElementById("root");
ReactDOM.hydrate(<App data={_DATA_} />, rootElement, () => {
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
