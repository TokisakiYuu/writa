import { Next, Middleware } from "koa";
import { RouterContext } from "koa-router";
import jwt from "jsonwebtoken";

export const jwtSignature = (): Middleware => (ctx: RouterContext, next: Next) => {
  const params = { ...ctx.query, ...ctx.body};
  return next();
};

export const jwtVerification = (): Middleware => (ctx: RouterContext, next: Next) => {
  const params = { ...ctx.query, ...ctx.body};
  ctx.cookies.secure
  return next();
};