import react from "react";
import { Context, Next } from "koa";
import htmlRender from "../util/htmlRender";

import App from "../public/components/App";

/**
 * Home page.
 * @route GET /
 */
export const index = (ctx: Context, next: Next) => {
  ctx.type = "html";
  ctx.body = htmlRender(react.createElement(App), {
    scripts: ["/components/app.component.js"]
  });
  return next();
};