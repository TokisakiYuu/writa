import React, {
  FC,
} from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components/macro";
import Article from "./Article";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import ArticleList from "./ArticleList";

import MagnetBox from "./MagnetBox";

const App: AppComponent = ({ data }) => {
  data;
  return (
    <>
      <GlobalStyle />
      {/* <PageHeader />
      <ArticleList>
        <Article />
        <Article />
        <Article />
      </ArticleList>
      <PageFooter /> */}

      <StyledMagnetBox>
        <div style={{
          fontSize: 30,
          width: 100,
          backgroundColor: "green"
        }}>hello</div>
      </StyledMagnetBox>
    </>
  );
};

const StyledMagnetBox = styled(MagnetBox)`
  position: relative;
  top: 80px;
  left: 80px;
`;

type AppComponent = FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}>;

export default App;
