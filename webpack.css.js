process.env.NODE_ENV = "production";

var ora = require("ora");
var chalk = require("chalk");
var webpack = require("webpack");
var webpackCss = require("./webpack.config.css.js");

var spinnerCSS = ora("Building CSS...");
spinnerCSS.start();
webpack(webpackCss, function (errCss, stats) {
  spinnerCSS.stop();
  if (errCss) throw errCss;
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + "\n\n"
  );
  console.log(chalk.cyan("  Build CSS complete.\n"));
});
