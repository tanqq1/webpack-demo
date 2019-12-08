const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode:'development',
    entry:{
     app: './src/index.js',
    },
    devtool:'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        filename:'[name].bundle.js',
        path:path.join(__dirname,'dist'),
        publicPath: '/'
    },
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

    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'热模块替换'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};