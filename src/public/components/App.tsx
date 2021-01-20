import React, {
  FC
} from "react";
import { createGlobalStyle } from "styled-components";
import Article from "./Article";

const App: AppComponent = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Article />
    </>
  );
};

const GlobalStyle = createGlobalStyle<{}>`
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { 
    margin:0; padding:0; 
  }
  html {
    font-size: 18px;
  }
  body { 
    background:#fff; 
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    color: rgb(18 18 18);
    -webkit-tap-highlight-color: rgb(18 18 18 / 0%);
  }
`;

type AppComponent = FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}>;

export default App;
