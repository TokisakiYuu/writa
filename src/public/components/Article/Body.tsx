import React, { FC } from "react";
import styled from "styled-components/macro";

const Body: FC<{}> = () => (
  <Container>
    <span>body</span>
  </Container>
);

const Container = styled.div`
  min-height: 200px;
  background-color: #e5ffb5;
`;

export default Body;
