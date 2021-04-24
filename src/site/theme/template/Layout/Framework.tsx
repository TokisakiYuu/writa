import React, { FC } from "react";
import styled from "styled-components/macro";
import GlobalStyle from "../GlobalStyle";
import Navigation from "./Navigation";
import Album from "./Album";
import Viewer from "./Viewer";

const Framework: FC<{}> = () => {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <Navigation />
        <Album />
        <Viewer />
      </Grid>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1.6fr 2.5fr 5.7fr;
`;

export default Framework;
