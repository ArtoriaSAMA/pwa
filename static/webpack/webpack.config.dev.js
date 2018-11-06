const basic = require('./webpack.config');
const path = require('path');
const assign = require('webpack-config-assign');

module.exports = assign({
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: path.resolve('src/main'),
    output: {
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            'src': path.resolve('src'),
        },
    },

    watch: true,
    cache: true,

    devServer: {
        port: 10011,
        host: '0.0.0.0',
        https: true,
        disableHostCheck: true,
        historyApiFallback: true,
        stats: { colors: true },
        inline: true,
        hot: true,
    },
}, basic);