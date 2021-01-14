import path from "path";
import { Middleware } from "koa";
import serve from "koa-static";

console.log(path.resolve(__dirname, "../public"));


const factory = (): Middleware => (
  serve(path.resolve(__dirname, "../public"), {
    maxage: process.env.NODE_ENV === "production" ? (7 * 24 * 60 * 60 * 1000) : 0
  })
);

export default factory;