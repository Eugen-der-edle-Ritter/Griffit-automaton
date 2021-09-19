const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'My Awesome test',
        filename: './index.html',
        template: './src/index.html'
    })
  ],
}