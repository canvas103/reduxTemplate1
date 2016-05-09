var webpack = require('webpack');
var path = require('path');
var config =
{
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src/javascripts/main.js'),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        proxy: {
            '/api/*': 'http://localhost:8080'

        }
    },
    devtool: "#inline-source-map",
    resolve: {
        root: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {

                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"'
        })
    ]
};
module.exports = config;