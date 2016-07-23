var webpack = require('webpack');
var path = require('path');

var config = {
  cache: true,
  devtool: 'inline-source-map',
  entry: './spec.entry.ts',

  output: {
    path: __dirname,
    filename: 'specs.js',
    sourceMapFilename: 'specs.map'
  },
  module: {
    loaders: [
      { test: /\.ts$/,   loader: 'awesome-typescript-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html/,  loader: 'raw-loader' },
      { test: /\.css$/,  loader: 'to-string-loader!css-loader' },
    ]
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /\.spec\.ts/,
      true,
      /\.spec\.ts/
    )
  ]
};
module.exports = config;
