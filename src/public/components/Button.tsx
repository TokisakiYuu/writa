import React, {
  FC
} from "react";

const Button: DefaultButton = ({ alertText }) => (
  <button onClick={() => alert(alertText)}>提示</button>
);

const PButton: PrimaryButton = ({ alertText, content }) => (
  <button onClick={() => alert(alertText)}>{content || "按钮"}</button>
);

type DefaultButton = FC<{
  alertText?: string;
}>

type PrimaryButton = FC<{
  alertText?: string;
  content?: string;
}>

export default Button;
export const PrimaryButton = PButton;