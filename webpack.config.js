var webpack = require('webpack');
var path = require('path');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  devtool:"#inline-source-map",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }, {
      test: /\.html$/,
      loader: "file?name=[name].[ext]"
    }]
  },
}
