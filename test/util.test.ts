import parsePageURL from "../src/util/parsePageURL";

describe("utils test", () => {
    test.each([
        "/article/8798weh2h39w8dh2je98h?token=koksappl",
        "https://www.tokisakiyuu.com/article/8798weh2h39w8dh2je98h?token=koksappl",
    ])("function parsePageURL %s", (ur) => {
        const result = parsePageURL(ur);
        expect(result).toMatchObject({
            view: "article",
            id: "8798weh2h39w8dh2je98h",
            query: {
                token: "koksappl"
            }
        });
    });
});