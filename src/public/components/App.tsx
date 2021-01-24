import React, {
  FC,
} from "react";
import GlobalStyle from "./GlobalStyle";
import Article from "./Article";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import ArticleList from "./ArticleList";

const App: AppComponent = ({ data }) => {
  data;
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
    </>
  );
};

type AppComponent = FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}>;

export default App;
