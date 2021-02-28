import path from "path";
import Webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface Environment {
  [name: string]: string;
}

const base: Webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader"]
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".less"],
  }
};

export default function configFunc(env: Environment): Webpack.Configuration[] {
  const mode = env.NODE_ENV === "production"? "production" : "development";
  const devtool = mode === "development" ? "inline-source-map" : "eval";
  return [{
    // client
    ...base,
    mode,
    devtool,
    entry: path.resolve(__dirname, "./src/site/client.tsx"),
    output: {
      path: path.resolve(__dirname, "./dist/site/_public"),
      library: "YuuLib",
      libraryTarget: "umd",
      filename: "index.js",
    }
  }, {
    // client css
    ...base,
    mode,
    devtool,
    entry: path.resolve(__dirname, "./src/site/theme/static/client.less"),
    output: {
      path: path.resolve(__dirname, "./dist/site/_public"),
      library: "YuuLib",
      libraryTarget: "umd",
      filename: "client.css_unless.js",
    },
    plugins: [ new MiniCssExtractPlugin({
      filename: "index.css"
    }) ]
  }];
}
