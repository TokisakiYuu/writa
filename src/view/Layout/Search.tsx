import React, { FC } from "react";
import styled from "styled-components/macro";

const Search: FC<{}> = () => (
  <StyleDiv>
    <div className="wrap">

    </div>
  </StyleDiv>
);

const StyleDiv = styled.div`
  padding: 10px;
  .wrap {
    height: 60px;
    background-color: grey;
    border-radius: 10px;
  }
`;

export default Search;
