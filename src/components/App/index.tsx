import React, {
  FC,
} from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../site/store";
import GlobalStyle from "../GlobalStyle";
import Article from "../Article";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";
import ArticleList from "../ArticleList";

import EasingBox from "../EasingBox";

const App: FC<{}> = () => {
  const store = useStore();
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

export default observer(App);
