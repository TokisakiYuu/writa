import path from "path";
import { Context, Next } from "koa";
import pug from "pug";

/**
 * Home page.
 * @route GET /
 */
export const index = (ctx: Context, next: Next) => {
  ctx.type = "html";
  ctx.body = pug.renderFile(path.resolve(__dirname, "../../views/home.pug"));
  return next();
};