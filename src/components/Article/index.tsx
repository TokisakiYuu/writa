import React, { FC } from "react";
import styled from "styled-components/macro";
import Var from "../_util/CSSVar";
import { useStore, useAction, observer } from "../../site/store";
// import * as bodyScrollLock from "body-scroll-lock";
// import animateScrollTo from "animated-scroll-to";

const Article: FC<{}> = () => {
  const store = useStore();
  const changeView = useAction(() => {
    store.currentView = store.currentView != "article" ? "article" : "home";
  });

  return (
    <Box>
      <span onClick={changeView}>我是文章 当前view: {store.currentView}</span>
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
