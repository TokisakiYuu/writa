import React, { FC, ReactElement } from "react";

const Head: FC<HeadProps> = ({ title, styleComponent }) => (
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
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
    {styleComponent}
  </head>
);

interface HeadProps {
  title: string;
  styleComponent: ReactElement | ReactElement[];
}

export default Head;
