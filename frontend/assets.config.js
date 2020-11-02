module.exports = {
  context: __dirname + "/src",
  distDir: __dirname + "/dist",
  
  template: {
    files: [
      "/pages/index.pug"
    ],
    watch: "/pages"
  },
  js: {
    files: [
      "/scripts/common.ts",
    ],
    watch: "/scripts"
  },
  css: {
    files: [
      "/styles/shell.less"
    ],
    watch: "/styles"
  },
  resource: {
    files: [
      "/resource/**/*"
    ],
    watch: "/resource"
  },
  other: {
    files: [
      "/*"
    ],
    watch: "/*"
  }
}