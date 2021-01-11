import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const _DATA_: any;
const rootElement = document.getElementById("root");
const AppElement = React.createElement(App, { data: _DATA_});
ReactDOM.hydrate(AppElement, rootElement, () => {
    console.log("[ReactDOM.hydrate]%c React DOM 已激活", "color: yellow");
});