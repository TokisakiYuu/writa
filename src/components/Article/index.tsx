import React, { FC } from "react";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
import styled from "styled-components/macro";
import Var from "../_util/CSSVar";
// import * as bodyScrollLock from "body-scroll-lock";
// import animateScrollTo from "animated-scroll-to";
import { useStore } from "../../site/store";

const Article: FC<{}> = () => {
  const store = useStore();
  return (
    <Box>
      <span onClick={action(() => store.currentView = "article")}>我是文章 当前view: {store.currentView}</span>
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
