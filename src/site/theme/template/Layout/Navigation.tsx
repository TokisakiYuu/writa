import React, { FC } from "react";
import styled from "styled-components/macro";
import Avatar from "../Avatar";
import Shortcuts from "../Shortcuts";
import Search from "./Search";

const Navigation: FC<{}> = () => (
  <Scope>
    <Avatar />
    <Search />
    <Shortcuts />
  </Scope>
);

const Scope = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.6fr 3fr;
`;

export default Navigation;
