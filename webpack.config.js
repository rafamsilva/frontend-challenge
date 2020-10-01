var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {
    app: [
      path.join(__dirname, "./src/app.js"),
      "webpack-hot-middleware/client?reload=true",
    ],
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
    extensions: [".js", ".jsx", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,

        exclude: /node_modules/,
        loader: "babel-loader",
        include: [path.resolve(__dirname, "src")],
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(png|jpe|jpg|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash:7].[ext]",
            outputPath: resolve("./dist"),
            emitFile: true,
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "css-loader?-url",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "base/index.html",
      inject: true,
    }),
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
