const path = require('path');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./base');


const developmentConfig = {

  plugins: [
    new WebpackBrowserPlugin({
      browser: 'Chrome',
      port: 9000,
      url: 'http://localhost',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },

};

module.exports = () => merge(baseConfig, developmentConfig);
