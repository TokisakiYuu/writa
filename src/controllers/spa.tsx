import { RouterContext } from "koa-router";
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components/macro";
import App from "../public/components/App";

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

  ctx.body = 
  "<!DOCTYPE html>" + 
  renderToStaticMarkup(
    <html lang="zh-cn" dir="ltr">
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>YuuLog</title>
        <link rel="canonical" href="https://www.tokisakiyuu.com" />
        <meta name="application-name" content="HTML Template" />
        <meta name="author" content="Tokisaki Yuu" />
        <meta name="description" content="Modern pug Starter Template" />
        <meta name="keywords" content="modern, useful, html, html5, css, css3, javascript, js, template, boilerplate, pug" />
        <meta name="referrer" content="strict-origin" />
        <meta itemProp="name" content="HTML Template" />
        <meta itemProp="description" content="Modern pug Starter Template" />
        <meta itemProp="image" content="128x128.png" />
        <meta name="apple-mobile-web-app-title" content="HTML Template" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#333" />
        <link rel="apple-touch-icon" href="512x512.png" />
        <meta name="theme-color" content="#f0f0f0" />
        <meta name="color-scheme" content="light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="stylesheet" type="text/css" href="/css/client.css" />
        {sheet.getStyleElement()}
    </head>
    <body>
        <div id="root" dangerouslySetInnerHTML={{__html: htmlContent}}></div>
    </body>
    <script type="text/javascript" dangerouslySetInnerHTML={{__html: `var _DATA_=${JSON.stringify(data)}`}} />
    <script type="text/javascript" src="/js/client.js" />
    </html>
  );
};
