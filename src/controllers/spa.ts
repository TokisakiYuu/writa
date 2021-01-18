import { RouterContext } from "koa-router";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "../public/components/App";
import Html from "../config/html";

/**
 * SPA Page
 * @route GET /**
 * @description
 * 单页应用，根据url来渲染首屏页面的html
 */
export const SPA = async (ctx: RouterContext) => {
  const data = { article: { title: "hello" , content: "花菜" } };
  let htmlContent: string;
  const sheet = new ServerStyleSheet();
  try {
    const ReactAppElement = React.createElement(App, { data });
    htmlContent = renderToString(sheet.collectStyles(ReactAppElement));
  } catch (error) {
    console.error(error);
    ctx.throw(500);
  }

  ctx.type = "html";
  ctx.body = Html({
    content: htmlContent,
    scripts: [
      `<script type=\"text/javascript\">var _DATA_=${JSON.stringify(data)}</script>`,
      "<script type=\"text/javascript\" src=\"/js/client.js\"></script>"
    ],
    styles: [
      sheet.getStyleTags(),
      "<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/client.css\">"
    ]
  });
};