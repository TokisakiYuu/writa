import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const _DATA_: any;
const rootElement = document.getElementById("root");
ReactDOM.hydrate(<App data={_DATA_} />, rootElement, () => {
    console.log("[ReactDOM.hydrate]%c React DOM active", "color: yellow");
});