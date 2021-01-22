import React, {
  FC,
} from "react";
import GlobalStyle from "./GlobalStyle";
import Article from "./Article";
// import useSSR from "use-ssr";

const App: AppComponent = ({ data }) => {
  data;
  return (
    <>
      <GlobalStyle />
      <Article />
    </>
  );
};

type AppComponent = FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}>;

export default App;
