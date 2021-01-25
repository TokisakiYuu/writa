import React, { FC, useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import Var from "../js/util/CSSVar";
import * as bodyScrollLock from "body-scroll-lock";
import animateScrollTo from "animated-scroll-to";

type ArticleComponent = FC<{}>;
const Article: ArticleComponent = () => {
  const [isOpen, setOpen] = useState(false);
  const element = useRef<HTMLElement>();
  useEffect(() => {
    if(isOpen) {
      animateScrollTo(element.current, {
        cancelOnUserAction: false
      });
    } else {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  }, [isOpen]);

  return (
    <Box
      onClick={() => setOpen(!isOpen)}
      bgc={isOpen? "#cfcfcf" : null}
      height={isOpen? "1000px": null}
      ref={element}
    >
      <span>我是文章 isOpen: {String(isOpen)}</span>
    </Box>
  );
};

const Box = styled.article.attrs({
  itemScope: true,
  itemType: "https://schema.org/Article",
  "body-scroll-lock-ignore": ""
})<{
  bgc: string;
  height: string;
}>`
  background-color: ${Var("bgc", "#808080")};
  height: ${Var("height", "100px")};
  border-bottom: 1px solid red;
`;

export default Article;
