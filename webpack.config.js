let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCss = require('optimize-css-assets-webpack-plugin')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    optimization: {
        minimizer: [
            new OptimizeCss(),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve('build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
            ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                'postcss-loader',
                'less-loader']
            }
        ]
    }
}