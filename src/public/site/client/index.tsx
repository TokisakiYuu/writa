import React, { FC } from "react";
import ReactDOM from "react-dom";
import store from "./store";
import App, { AppInitData } from "../../components/App";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

const Client: FC<ClientProps> = ({ currentView }) => {
  store.toView(currentView);
  return <App />;
};

interface ClientProps {
  currentView: string;
}

declare const _DATA_: AppInitData;

if(document && document.getElementById) {
  const rootElement = document.getElementById("root");
  ReactDOM.hydrate(<Client currentView={"home"} />, rootElement, () => {
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
}

export default Client;
