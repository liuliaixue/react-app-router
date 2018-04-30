var webpack = require('webpack')

module.exports = {
  entry: './index.js',

  output: {
    path: 'build',
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    host: '127.0.0.1',
    port: 60000
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/, loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {}
      }
    ],
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
}
