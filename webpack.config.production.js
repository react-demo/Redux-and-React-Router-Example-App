/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/javascript/index',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'redux': path.join(__dirname, 'node_modules/redux')
    },
    extensions: [ '', '.js' ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src', 'javascript')
    }, {
      test: /\.css$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }, {
      test: /\.less$/,
      loaders: ['style', 'css', 'less'],
      include: __dirname
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: path.join(__dirname, 'src', 'images')
    }, {
      test: /\.woff|\.woff2$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot$/,
      loader: "file"
    }, {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  }
};
