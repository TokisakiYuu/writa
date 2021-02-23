import React, {
  FC,
} from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import GlobalStyle from "./GlobalStyle";
import Article from "./Article";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import ArticleList from "./ArticleList";

import EasingBox from "./EasingBox";

const App: FC<{
  data: AppData;
}> = ({ data }) => {
  const store = useLocalObservable(() => ({
    ...data
  }));
  return (
    <>
      <GlobalStyle />
      <PageHeader />
      <ArticleList>
        <Article article={store.article} />
        <Article article={store.article} />
        <Article article={store.article} />
      </ArticleList>
      <PageFooter />

      {/* <EasingBox /> */}
    </>
  );
};

type AppData = {
  article: {
    title: string;
  };
};

export default observer(App);
