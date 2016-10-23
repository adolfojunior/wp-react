const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')

const webpackConfig = {
  entry: {
    vendors: config.vendors,
    app: config.path.main
  },
  output: {
    path: config.path.output,
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: '[name]-[hash].js'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: config.path.html,
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        env: {
          production: {
            // presets: ['react-optimize']
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
