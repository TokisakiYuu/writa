import path from "path";
import Webpack from "webpack";

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
              "src/**/*.{ts,tsx,js,jsx}"
            ]
          }
        }]
      }
    ]
  }
};

export default function configFunc(env: Environment): Webpack.Configuration[] {
  const mode = env.NODE_ENV === "production"? "production" : "development";
  const devtool = mode === "development" ? "inline-source-map" : "eval";
  return [{
    // home
    ...base,
    mode,
    devtool,
    entry: path.resolve(__dirname, "./src/public/components/App.tsx"),
    output: {
      path: path.resolve(__dirname, "./dist/public/components"),
      library: "YuuLib",
      libraryTarget: "umd",
      filename: "app.component.js",
    }
  }];
}
