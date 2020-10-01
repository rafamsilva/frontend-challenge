const webpackConfig = require("./webpack.config");
const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const options = {
  contentBase: "./src",
  hot: true,
  stats: {
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: "./dist",
  },
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen("3000", "localhost", function (err) {
  console.log("dev server listening on port 5000");
});
