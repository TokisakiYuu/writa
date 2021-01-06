import Webpack, { } from "webpack";
import WebpackConfigFactory from "../webpack.config";

const configs = WebpackConfigFactory(process.env);

const multiCompiler: Webpack.MultiCompiler = Webpack(configs);
multiCompiler.compilers.forEach((compiler: Webpack.Compiler) => {
  compiler.run((err: Error, stats: Webpack.Stats) => {
    if(err) {
      console.error(err);
      return;
    }
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
  });
});