import path from "path";
import Webpack from "webpack";

const config: Webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["babel-loader"]
      },
      {
        test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/ ,
        use:[{
          loader: "url-loader",
          options: {
            limit: 1024 * 100,
            outputPath: "public/static",
            name: "[name].[hash:8].[ext]"
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".gif", ".png", ".jpg", ".woff", ".svg", ".ttf", ".eot"],
  },
  mode: "development",
  devtool: "source-map",
  entry: path.resolve(__dirname, "src/view/Layout/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    library: "Writa",
    libraryTarget: "umd",
    filename: "public/app.js",
    globalObject: "this"
  }
};

export default config;


