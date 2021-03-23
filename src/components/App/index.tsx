import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import GlobalStyle from "../GlobalStyle";
import Article from "../Article";
import PageHeader from "../PageHeader";
import PageFooter from "../PageFooter";
import ArticleList from "../ArticleList";

import EasingBox from "../EasingBox";

const App: FC<{}> = () => {
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

      <EasingBox />
    </>
  );
};

export default observer(App);
