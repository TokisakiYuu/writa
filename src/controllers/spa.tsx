import { Next } from "koa";
import { RouterContext } from "koa-router";
import { render } from "../config/html";

/**
 * SPA Page
 * @route GET /**
 */
export const spaEnterPoint = function(options?: SpaEnterPointOptions) {
  return async (ctx: RouterContext, next: Next) => {
    if(options) {
      const { exclude } = options;
      if(exclude.includes(ctx.path)) return next();
    }
    
    const data = { currentView: "welcome" };
    ctx.type = "html";
    ctx.body = render(data);
  };
};

interface SpaEnterPointOptions {
  // by ctx.path
  exclude: string[];
}
