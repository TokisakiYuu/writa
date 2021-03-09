import React, { FC } from "react";
import styled from "styled-components/macro";
import { state, bind } from "reactive.macro";

const PageFooter: FC<{}> = () => {
  const num = state(1);
  return (
    <Box>
      <input type="number" value={bind(num)} />
      <span>我是page footer {num}</span>
    </Box>
  );
};

const Box = styled.footer`
  background-color: blue;
`;

export default PageFooter;
