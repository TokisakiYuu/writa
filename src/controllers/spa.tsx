import { Context, Next } from "koa";
import React from "react";
import App from "../public/components/App";
import htmlRender from "../util/htmlRender";

/**
 * SPA Page
 * @route GET /**
 * @description
 * 单页应用，根据url来渲染首屏页面的html
 */
export const SPA = async (ctx: Context, next: Next) => {
  if(ctx.method.toUpperCase() !== "GET") return next();
  await next();
  const props = { text: "你好" };
  ctx.type = "html";
  ctx.body = htmlRender(<App {...props} />, {
    scripts: ["/components/app.component.js"]
  });
};