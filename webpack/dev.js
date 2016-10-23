const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')

const webpackConfig = {
  devtool: 'eval-source-map',
  entry: {
    vendors: config.vendors,
    app: config.path.main
  },
  output: {
    path: config.path.output,
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendores.js'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    new HtmlWebpackPlugin({
      template: config.path.html,
      filename: 'index.html',
      inject: 'body'
    }),
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-0'],
        env: {
          production: {
            presets: ['react-optimize']
          }
        }
      }
    },{
      test: /\.json$/,
      loader: 'json'
    }, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('raw-loader!sass-loader'),
		}]
  }
}

module.exports = webpackConfig
