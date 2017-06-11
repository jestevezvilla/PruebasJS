const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');


module.exports = function () {
  return {
    context: path.resolve(__dirname, '../app'),
        // entry: ['./app/js/main.js','./app/css/main.scss'],
    entry: './js/main.js',
    output: {
      filename: 'js/bundle.js',
      path: path.resolve(__dirname, '../dist'),
    },
    module: {
      rules: [{
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
              use: [{
                  loader: 'css-loader',
                }, {
                    loader: 'sass-loader',
                  }],
            }),
        }],
    },
    plugins: [
      new ExtractTextPlugin('css/main.css'),
      new HtmlWebpackPlugin({
          title: 'Index',
          template: './index.template.ejs',
        }),
      new HtmlWebpackPlugin({
          title: 'Tests',
          filename: 'tests.html',
          template: './tests.template.ejs',
        }),
    ],
  };
};
