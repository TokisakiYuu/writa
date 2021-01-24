import React, { FC } from "react";
import styled from "styled-components";

const ArticleList: FC<{}> = ({ children }) => (
  <Box>
    {children}
  </Box>
);

const Box = styled.section`
  background-color: #868686;
`;

export default ArticleList;
