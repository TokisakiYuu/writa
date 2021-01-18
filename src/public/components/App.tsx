import React, {
  FC
} from "react";
import Button, { PrimaryButton } from "./Button";
import styled from "styled-components";

const App: AppComponent = ({ data }) => {
  return (
    <>
      <Button alertText={"标题: " + data.article.title} />
      <PrimaryButton alertText={"内容: " + data.article.content} content="问" />
      <Div>
        <p>
          你好我是有鱼
          <span>哈哈哈</span>
        </p>
      </Div>
    </>
  );
};

const Div = styled.div`
  & > p {
    color: green;
    span {
      color: red;
    }
  }
`;

type AppComponent = FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}>;

export default App;