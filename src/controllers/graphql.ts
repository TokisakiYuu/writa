import Router, { RouterContext } from "koa-router";
import httpError from "http-errors";
import { parse, Source, validate, specifiedRules } from "graphql";
import { execute } from "graphql/execution";
import logger from "../util/logger";
import schema from "../data/types/Schema";

export const graphqlServer: Router.IMiddleware = async (ctx: RouterContext) => {
  const params = { ...ctx.query, ...ctx.body};
  const { query } = params;
  const documentNode = parse(new Source(query));

  // 验证前端传过来的document是否合法
  const validationErrors = validate(schema, documentNode, specifiedRules);
  if (validationErrors.length > 0) {
    throw httpError(400, "GraphQL validation error.", {
      graphqlErrors: validationErrors,
    });
  }

  const { data, errors } = await execute({
    schema,
    document: documentNode
  });
  if(errors) {
    console.error(errors);
  }
  logger.debug(data);
  ctx.body = data;
};
