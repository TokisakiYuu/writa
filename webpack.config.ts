import path from "path";
import Webpack from "webpack";

interface Environment {
  [name: string]: string;
}

const base: Webpack.Configuration = {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{
          loader: "awesome-typescript-loader",
          options: {
            forceIsolatedModules: true,
            reportFiles: [
              "src/**/*.{ts,tsx,js,jsx}"
            ]
          }
        }]
      }
    ]
  }
};

export default function configFunc(env: Environment): Webpack.Configuration[] {
  const mode = env.production ? "production" : "development";
  return [{
    // home
    ...base,
    mode,
    entry: path.resolve(__dirname, "./src/public/components/App.tsx"),
    output: {
      path: path.resolve(__dirname, "./dist/public/components"),
      library: "YuuLib",
      libraryTarget: "umd",
      filename: "app.component.js",
    }
  }];
}
