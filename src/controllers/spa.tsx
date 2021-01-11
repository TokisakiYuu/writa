import { Context, Next } from "koa";
import React from "react";
import App from "../public/components/App";
import render from "../util/htmlRender";

/**
 * SPA Page
 * @route GET /**
 * @description
 * 单页应用，根据url来渲染首屏页面的html
 */
export const SPA = async (ctx: Context, next: Next) => {
  if(ctx.method.toUpperCase() !== "GET") return next();
  if(!(ctx.headers.accept as string).startsWith("text/html")) return next();
  await next();
  const data = { article: { title: "hello" , content: "花菜" } };
  ctx.type = "html";
  ctx.body = render(<App data={data} />);
};