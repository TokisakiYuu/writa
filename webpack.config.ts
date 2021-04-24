import path from "path";
import Webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";

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
    // react client
    ...base,
    mode,
    devtool,
    entry: path.resolve(__dirname, "./src/site/client.tsx"),
    output: {
      path: path.resolve(__dirname, "./dist/site/_public"),
      library: "YuuLib",
      libraryTarget: "umd",
      filename: "index.js",
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "./src/site/theme/static"),
            to: path.resolve(__dirname, "./dist/site/_public")
          },
        ],
      })
    ]
  }];
}
