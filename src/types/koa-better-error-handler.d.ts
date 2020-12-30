declare module "koa-better-error-handler" {
  export default function errorHandler(
    cookiesKey?: boolean
  ): (err: any) => void;
}