import React, {
  FC
} from "react";
import Button, { PrimaryButton } from "./Button";

const App: AppComponent = ({ data }) => {
  const dataJSON = JSON.stringify(data);
  return (
    <>
      <script type={"text/javascript"} dangerouslySetInnerHTML={{__html: `var _DATA_ = ${dataJSON}`}}></script>
      <Button alertText={"标题: " + data.article.title} />
      <PrimaryButton alertText={"内容: " + data.article.content} content="问" />
    </>
  );
};

type AppComponent = FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}>;

export default App;