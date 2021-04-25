import React, { FC } from "react";
import styled from "styled-components/macro";
import { state } from "reactive.macro";

const Viewer: FC<{}> = () => {
  const a = state(1);
  return (
    <Scope>
      {a}
    </Scope>
  );
};


const Scope = styled.div`
  background-color: blue;
`;

export default Viewer;
