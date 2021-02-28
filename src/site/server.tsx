/**
 * 供路由handler调用，并使用React的服务端渲染api得到html代码
 */
import React from "react";
import { AppStatusData, makeReaction } from "./store";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components/macro";
import Layout from "./theme/template/Layout";

export function render(data: AppStatusData) {
  // 准备状态数据
  makeReaction(data);
  const sheet = new ServerStyleSheet();
  const layoutHTML = renderToString(sheet.collectStyles(<Layout />));
  return (
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
          <link rel="stylesheet" type="text/css" href="/index.css" />
          {sheet.getStyleElement()}
      </head>
      <body>
          <main id="root" dangerouslySetInnerHTML={{__html: layoutHTML}}></main>
      </body>
      <script type="text/javascript" dangerouslySetInnerHTML={{__html: `var _DATA_=${JSON.stringify(data)}`}} />
      <script type="text/javascript" src="/index.js" />
      </html>
    )
  );
}
