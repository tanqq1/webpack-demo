const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool:'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
              test:/\.(jpg|png|svg|gif)$/i,
              use:['file-loader']
          },
          {
              test:/\.(woff|woff2|eot|ttf|otf)$/i,
              use:['file-loader']
          }
        ],
      },
});