import React, {
  FC
} from "react";
import styled from "styled-components/macro";

const MButton = styled.button`
  color: blue;
  font-size: 50px;
`;

const Button: DefaultButton = ({ alertText }) => (
  <MButton onClick={() => alert(alertText)}>提示</MButton>
);

const PButton: PrimaryButton = ({ alertText, content }) => (
  <button onClick={() => alert(alertText)}>{content || "按钮"}</button>
);

type DefaultButton = FC<{
  alertText?: string;
  textColor?: string;
}>

type PrimaryButton = FC<{
  alertText?: string;
  content?: string;
}>

export default Button;
export const PrimaryButton = PButton;
