import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components/macro";
import Var from "../_util/CSSVar";
import * as bodyScrollLock from "body-scroll-lock";
import animateScrollTo from "animated-scroll-to";
import store from "../../site/client/store";

const Article: FC<{}> = () => {
  return (
    <Box>
      <span onClick={() => store.toView("article")}>我是文章 当前view: {store.currentView}</span>
    </Box>
  );
};

const Box = styled.article.attrs({
  itemScope: true,
  itemType: "https://schema.org/Article",
  "body-scroll-lock-ignore": ""
})`
  background-color: ${Var("bgc", "#808080")};
  height: ${Var("height", "100px")};
  border-bottom: 1px solid red;
`;

export default observer(Article);
