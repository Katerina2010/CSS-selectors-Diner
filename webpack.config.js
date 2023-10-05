const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, './dist'),
      assetModuleFilename: 'assets/[name].[ext]'
  },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.ts$/i,
          use: 'ts-loader',
        },
        {
          test:/\.(s*)css$/,
          use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new miniCss(),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
