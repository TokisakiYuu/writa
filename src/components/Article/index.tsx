import React, { FC } from "react";
import styled from "styled-components/macro";
import Var from "../_util/CSSVar";

const Article: FC<{}> = () => (
  <Box>
    <span>我是文章</span>
  </Box>
);

const Box = styled.article.attrs({
  itemScope: true,
  itemType: "https://schema.org/Article",
  "body-scroll-lock-ignore": ""
})`
  background-color: ${Var("bgc", "#808080")};
  height: ${Var("height", "100px")};
  border-bottom: 1px solid red;
`;

export default Article;
