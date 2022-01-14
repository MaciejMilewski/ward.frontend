const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {HotModuleReplacementPlugin} = require("webpack");

const favicon = {favicon: "./src/assets/favicon.ico"};

module.exports = (env, argv) => ({
  mode: argv.mode || 'development',
  entry: {
    'develop/index': path.join(__dirname, 'src', 'develop', 'index.js'),
    'view/index': path.join(__dirname, 'src', 'view', 'index.jsx'),
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"],
            babelrc: false
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({...favicon, template: './src/index.html', inject: false}),
    new HtmlWebpackPlugin({...favicon, template: './src/develop/index.html', filename: 'develop/index.html', chunks: ['develop/index']}),
    new HtmlWebpackPlugin({...favicon, template: './src/view/index.html', filename: 'view/index.html', chunks: ['view/index']}),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:8081',
    },
  }
});
