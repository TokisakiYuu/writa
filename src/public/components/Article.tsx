import React, { FC } from "react";
import styled from "styled-components/macro";

type ArticleComponent = FC<{}>;
const Article: ArticleComponent = () => {
  return (
    <Box>
      <span>我是文章</span>
    </Box>
  );
};

const Box = styled.article.attrs({
  itemScope: true,
  itemType: "https://schema.org/Article"
})`
  background-color: #808080;
`;

export default Article;
