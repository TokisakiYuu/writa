import type { Request } from "koa";
import DataLoader from "dataloader";

export default class Context {
  private readonly req: Request | null;

  constructor(req?: Request) {
    this.req = req;
  }

  timeTransform = new DataLoader<number, Date>((timestamps) => {
    return Promise.resolve(timestamps.map(timestamp => new Date(timestamp)));
  })
}
