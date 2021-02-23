import React, { FC } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import styled from "styled-components/macro";
import Var from "../js/util/CSSVar";
import * as bodyScrollLock from "body-scroll-lock";
import animateScrollTo from "animated-scroll-to";

const Article: FC<{
  article: {
    title: string;
  };
}> = ({ article }) => {
  return (
    <Box>
      <span onClick={() => {
        article.title = "你好233";
      }}>我是文章 {article.title}</span>
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
