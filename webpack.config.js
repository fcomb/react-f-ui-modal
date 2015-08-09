const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    // 'webpack-dev-server/client?http://0.0.0.0:3000',
    // 'webpack/hot/only-dev-server',
    './src/modal',
    './src/styles/modal',
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'modal.js',
  },
  module: {
    noParse: ['node_modules/react'],
    loaders: [
      { test: /(.js|.jsx)/, exclude: /node_modules/, loader: 'babel?cacheDirectory=true' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ],
  },
  resolve: {
    root: path.join(__dirname, '/src'),
    extensions: ['', '.js', '.json', '.jsx', '.scss'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
  devtool: 'cheap-module-eval-source-map',
};

module.exports = config;
