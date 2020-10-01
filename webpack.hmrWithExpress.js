const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

const compiler = webpack(webpackConfig);

app.use(
  require("webpack-dev-middleware")(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(require("webpack-hot-middleware")(compiler));

// handle fallback for HTML5 history API
app.use(require("connect-history-api-fallback")());

staticPath = path.join(path.join(__dirname, "dist") + "/themes");
app.use("/themes", express.static(staticPath));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
