var path = require("path");

module.exports = {
  entry: {
    app: [path.join(__dirname, "./base/themes/default.scss")],
  },
  output: {
    path: path.join(__dirname, "./dist/"),
  },
  resolve: {
    extensions: [".scss"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "../dist/themes/theme.[name].scss",
            },
          },
          {
            loader: "extract-loader",
          },
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
};
