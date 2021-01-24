import React, { FC } from "react";
import styled from "styled-components";

const PageHeader: FC<{}> = ({ children }) => (
  <Box>
    <span>我是page header</span>
  </Box>
);

const Box = styled.header`
  background-color: yellow;
`;

export default PageHeader;
