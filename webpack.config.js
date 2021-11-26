const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {HotModuleReplacementPlugin} = require("webpack");

module.exports = (env, argv) => ({
  mode: argv.mode || 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
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
        test: /\.(jpe?g|png)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  }
});