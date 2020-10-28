module.exports = {
  context: __dirname + "/src",
  template: [
    "/pages/index.pug"
  ],
  js: [
    "/scripts/common.ts",
  ],
  css: [
    "/styles/shell.less"
  ],
  resource: [
    "/resource/**/*"
  ],
  favicon: "/favicon.ico"
}