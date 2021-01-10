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
        use: [{
          loader: "awesome-typescript-loader",
          options: {
            forceIsolatedModules: true,
            reportFiles: [
              "src/**/*.{ts,tsx}"
            ]
          }
        }]
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
    // client js
    ...base,
    mode,
    devtool,
    entry: path.resolve(__dirname, "./src/public/js/client.ts"),
    output: {
      path: path.resolve(__dirname, "./dist/public/js"),
      library: "YuuLib",
      libraryTarget: "umd",
      filename: "client.js",
    }
  }, {
    // client css
    ...base,
    mode,
    devtool,
    entry: path.resolve(__dirname, "./src/public/css/client.less"),
    output: {
      path: path.resolve(__dirname, "./dist/public/css"),
      library: "YuuLib",
      libraryTarget: "umd",
      filename: "client.css_unless.js",
    },
    plugins: [ new MiniCssExtractPlugin({
      filename: "client.css"
    }) ]
  }];
}
