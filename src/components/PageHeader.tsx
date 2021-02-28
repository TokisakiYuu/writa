import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components/macro";

const PageHeader: FC<{}> = () => {
  return (
    <Box>
      <span>我是page header</span>
    </Box>
  );
};

const Box = styled.header`
  background-color: yellow;
`;

export default observer(PageHeader);
