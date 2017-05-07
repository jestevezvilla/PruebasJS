const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');


module.exports = function () {
    return {
        entry: ['./app/js/main.js','./app/css/main.scss'],
        output: {
            filename: 'js/bundle.js',
            path: path.resolve(__dirname, '../dist')
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }]
                })
            }]
        },
        plugins: [
            new ExtractTextPlugin('css/main.css'),
            new HtmlWebpackPlugin(),
            new WebpackBrowserPlugin({
                browser: 'Chrome',
                port: 9000,
                url: 'http://localhost'
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
        }
    }
};