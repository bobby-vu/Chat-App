const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'app/');

var config = {
  entry: APP_DIR + '/index.js',
  output: { path: BUILD_DIR, filename: 'bundle.js', publicPath: 'app' },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    hot: true
  }
};

module.exports = config;
