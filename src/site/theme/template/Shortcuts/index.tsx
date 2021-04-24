import React, { FC } from "react";
import styled from "styled-components/macro";

/**
 * 单个快捷方式
 */
const Link: FC<{
  icon: string;
  text: string;
}> = ({ icon, text }) => (
  <LinkStyle>
    <div>
      <div className={`icon-${icon}`}></div>
      <span className="link-text">{text}</span>
    </div>
  </LinkStyle>
);
const LinkStyle = styled.div`
  color: white;
  display: flex;
  cursor: pointer;
  transition: background-color .2s;
  div {
    margin: 6px;
    font-size: 1.2em;
  }
  .link-text {
    margin-left: 6px;
  }
  &:hover {
    background-color: #4b4b4b;
  }
  & + & {
    margin-top: 10px;
  }
`;


/**
 * 快捷方式组
 */
const Shortcuts: FC<{}> = () => (
  <Scope>
    <Link icon="take-a-look" text="看一看" />
    <Link icon="note" text="记事本" />
  </Scope>
);
const Scope = styled.div`
  background-color: #222222;
`;

export default Shortcuts;
