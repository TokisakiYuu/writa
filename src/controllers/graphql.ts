import Router, { RouterContext } from "koa-router";
import { graphql } from "graphql";
import logger from "../util/logger";
import schema from "../config/graphql";

export const graphqlServer: Router.IMiddleware = async (ctx: RouterContext) => {
  const params = { ...ctx.query, ...ctx.body};
  const { query } = params;
  const result = await graphql(schema, query);
  logger.debug(result);
  ctx.body = result;
};