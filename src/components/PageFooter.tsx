import React, { FC } from "react";
import styled from "styled-components/macro";

const PageFooter: FC<{}> = ({ children }) => (
  <Box>
    <span>我是page footer</span>
  </Box>
);

const Box = styled.footer`
  background-color: blue;
`;

export default PageFooter;
