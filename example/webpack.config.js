const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            path.resolve('./src/index.js')
        ]
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].[hash].bundle.js'
    },
    devServer: {
        contentBase: path.resolve('./dist'),
        compress: true,
        port: 8080,
        hot: true,
        stats: 'minimal',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['ensure-css-loader/loader2' ,'style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Required
            inject: false,
            template: require('html-webpack-template')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
