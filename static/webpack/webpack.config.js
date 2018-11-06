const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('index.html'),
        }),
    ],
};