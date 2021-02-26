import React, { FC, ReactElement } from "react";
import Head from "./Head";
import Body from "./Body";

const Document: FC<DocumentProps> = ({ title, styleComponent, htmlContent, data }) =>  (
  <html lang="zh-cn" dir="ltr">
    <Head title={title} styleComponent={styleComponent} />
    <Body htmlContent={htmlContent} />
    <script type="text/javascript" dangerouslySetInnerHTML={{__html: `var _DATA_=${JSON.stringify(data)}`}} />
    <script type="text/javascript" src="/js/client.js" />
  </html>
);

interface DocumentProps {
  /** 文档标题 */
  title?: string;
  /** 样式表组件 */
  styleComponent?: ReactElement | ReactElement[];
  /** 预渲染出来的html内容 */
  htmlContent: string;
  /** 浏览器端react初始数据 */
  data: Record<string, unknown>;
}

export default Document;
