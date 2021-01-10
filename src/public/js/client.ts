import React from "react";
import ReactDOM from "react-dom";
import parsePageURL from "../../util/parsePageURL";
import App from "../components/App";

const rootElement = document.getElementById("root");
const page = parsePageURL(location.href);
const AppElement = React.createElement(App, page);
ReactDOM.hydrate(AppElement, rootElement, () => {
    console.log("react dom 已激活");
});