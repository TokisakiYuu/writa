import { Context, Next } from "koa";
import React from "react";
import App from "../public/components/App";
import htmlRender from "../util/htmlRender";
import parsePageURL from "../util/parsePageURL";

/**
 * SPA Page
 * @route GET /**
 * @description
 * 单页应用，根据url来渲染首屏页面的html
 */
export const SPA = async (ctx: Context, next: Next) => {
  if(ctx.method.toUpperCase() !== "GET") return next();
  await next();
  const pageInfo = parsePageURL(ctx.path);
  ctx.type = "html";
  ctx.body = htmlRender(<App {...pageInfo} />, {
    scripts: ["/js/client.js"],
    styles: ["/css/client.css"]
  });
};