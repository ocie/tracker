var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[chunkhash].js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({
                template: 'src/index.ejs'
              }),
              new webpack.optimize.CommonsChunkPlugin({
                  names: ["common", "manifest"]
              }),
              new webpack.DefinePlugin({
                'process.env': {
                  NODE_ENV: JSON.stringify('production')
                }
              }),
              new webpack.optimize.UglifyJsPlugin()]
};