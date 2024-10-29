const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',  // Entry point for the application

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
