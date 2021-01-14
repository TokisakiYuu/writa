import { Middleware } from "koa";
import compress from "koa-compress";
import zlib from "zlib";
const { Z_SYNC_FLUSH } = zlib.constants;

const factory = (): Middleware => (
  compress({
    gzip: { flush: Z_SYNC_FLUSH },
    deflate: { flush: Z_SYNC_FLUSH },
    br: false
  })
);

export default factory;