const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: "./index.html"
});

module.exports = {

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  resolveLoader: {
    alias: {
      'json-schema-loader': path.resolve(__dirname, "loaders/json-schema-loader.js"),
      'my-own-loader': path.resolve(__dirname, "loaders/my-own-loader.js"),
    },
  },

  entry: path.resolve(__dirname, 'src/index.ts'),

  module: {
    rules: [

      {
        test: /\.schema\.json$/,
        exclude: /node_modules/,
        use: [
          { loader: "ts-loader" },
          { loader: "my-own-loader" }
        ],
        type: 'javascript/auto'
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.schema\.json$/]
        }
      }
    ]
  },

  plugins: [htmlPlugin],

};