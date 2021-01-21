import React, {
  FC
} from "react";
import GlobalStyle from "./GlobalStyle";
import Article from "./Article";

const App: AppComponent = ({ data }) => {
  console.log("this app init data is", data);
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
