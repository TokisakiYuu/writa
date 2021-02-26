import React, {
  FC,
} from "react";
import { observer } from "mobx-react-lite";
import store from "../../site/client/store";
import GlobalStyle from "../GlobalStyle";
import Article from "../Article";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";
import ArticleList from "../ArticleList";

import EasingBox from "../EasingBox";

const App: FC<{}> = () => {
  console.log(store.currentView);
  console.log("渲染了App组件");
  
  return (
    <>
      <GlobalStyle />
      <PageHeader />
      <ArticleList>
        <Article />
        <Article />
        <Article />
      </ArticleList>
      <PageFooter />

      {/* <EasingBox /> */}
    </>
  );
};

export interface AppInitData {
  article: {
    title: string;
  };
};

export default observer(App);
