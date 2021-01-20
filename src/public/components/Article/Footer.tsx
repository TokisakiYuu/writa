import React, { FC } from "react";
import styled from "styled-components";

const Footer: FC<{}> = () => (
  <Container>
    <span>footer</span>
  </Container>
);

const Container = styled.div`
  min-height: 80px;
  background-color: #8effb0;
`;

export default Footer;
