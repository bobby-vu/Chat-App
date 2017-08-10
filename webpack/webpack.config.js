const path = require("path");

module.exports = {
  entry: "../app/index.js",
  output: "../public/bundle.js",
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};