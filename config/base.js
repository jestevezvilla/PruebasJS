const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UrlLoader = require('url-loader');
const ImageWebpackLoader = require('image-webpack-loader');

module.exports = {
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, '../app'),
  entry: {
    index: ['./js/main.js'],
    rx: ['./js/rx.js'],
    functional: ['./js/functional.js'],
    flickr: ['./js/flickr.js'],
    d3: ['./js/d3.js'],
    canvas: ['./js/canvas.js'],
  },
  output: {
    filename: 'js/[name].bundle.js',
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
    },
    {
      test: /\.jpg$/,
      loaders: [
        'url-loader?limit=2000000', // Si el tamaño de la imagen es menor de 2000000 incluye la imagen inline en BASE64
        'image-webpack-loader',
      ],
    }],
  },
  plugins: [
    new ExtractTextPlugin('css/main.css'),
    new HtmlWebpackPlugin({
      title: 'Index',
      filename: 'index.html',
      template: './index.template.ejs',
    }),
    new HtmlWebpackPlugin({
      title: 'Tests',
      filename: 'tests.html',
      template: './tests.template.ejs',
    }),
    new HtmlWebpackPlugin({
      title: 'Rx JS',
      filename: 'rx.html',
      template: './rx.template.ejs',
      chunks: ['rx'],
    }),
    new HtmlWebpackPlugin({
      title: 'Programación Funcional',
      filename: 'functional.html',
      template: './functional.template.ejs',
      chunks: ['functional'],
    }),
    new HtmlWebpackPlugin({
      title: 'Programación Funcional - FLickr',
      filename: 'flickr.html',
      template: './flickr.template.ejs',
      chunks: ['flickr'],
    }),
    new HtmlWebpackPlugin({
      title: 'D3 JS',
      filename: 'd3.html',
      template: './d3.template.ejs',
      chunks: ['d3'],
    }),
    new HtmlWebpackPlugin({
      title: 'Canvas',
      filename: 'canvas.html',
      template: './canvas.template.ejs',
      chunks: ['canvas'],
    }),
  ],
};
