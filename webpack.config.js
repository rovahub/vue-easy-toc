'use strict';

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry : path.resolve(__dirname + '/src/index.js'),

  output : {
    filename : 'vue-easy-toc.js',
    libraryTarget : 'umd',
    path : path.resolve(__dirname, 'dist')
  },

  module : {
    rules : [
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
};
