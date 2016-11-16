var webpack = require('webpack')
var path = require('path')

var build_dir = path.resolve(__dirname, 'src/build')
var app_dir = path.resolve(__dirname, 'src/app')

var config = {
  entry: app_dir + '/index.js',
  output: {
    path: build_dir,
    filename : 'bundle.js'
  }
}

module.exports = config;
