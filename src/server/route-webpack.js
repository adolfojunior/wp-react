import path from 'path'
import webpack from 'webpack'
import webpackDevConfig from '../../webpack/dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import logger from './logger'

const log = logger(`route-webpack`)

export default function routeWebpack (app, express) {
  log.info(`configuring webpack dev/hot middleware...`)

  const compiler = webpack(webpackDevConfig)
  const hotMiddleware = webpackHotMiddleware(compiler)
  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    contentBase: `src`,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    },
    stats: {
      hash: false,
      colors: true,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })

  app.use(devMiddleware)
  app.use(hotMiddleware)
}
