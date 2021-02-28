import { RouterContext } from "koa-router";
import { render } from "../site/server";
import { AppStatusData } from "../site/store";

/**
 * SPA Page
 * @route GET /**
 */
export const SPA = async (ctx: RouterContext) => {
  const data = { currentView: "welcome" } as AppStatusData;
  ctx.type = "html";
  ctx.body = render(data);
};
