import { createServer } from "../src/util/server";

describe("create koa http/2 server", () => {
  it("no error", async () => {
    const server = await createServer({

    });
    expect(server).toMatchObject({});
  });
});