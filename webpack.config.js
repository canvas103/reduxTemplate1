/**
 * Created by chenghui on 2/8/2016.
 */
var webpack = require("webpack");
var path = require("path");


module.exports = {
    entry: path.resolve(__dirname, "src/main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader"
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
}