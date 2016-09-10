/*
*
*/
var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV;

var plugins = [
  // new webpack.optimize.CommonsChunkPlugin(
  //     'vendor',
  //     env === 'prod' ? 'vendor.min.js' : 'vendor.js',
  //     Infinity)
];

if (env === 'prod') {
  var uglify = new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: false
  });
  plugins.push(uglify);
}

var config = {
  entry: {
    client: path.resolve('./main.js'),
    tests: path.resolve('./tests.js')
    // vendor: ['angular']
  },
  output: {
    filename: env === 'prod' ? '[name].bundle.min.js' : '[name].bundle.js',
    path: path.resolve('./dist')
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          plugins: ["add-module-exports"]
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', 'web.js', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      'bower_components',
      path.resolve('client/src'),
      path.resolve('client')
    ]
  },
  plugins: plugins,
  externals: {
    angular: 'angular'
  }
};

module.exports = config;
