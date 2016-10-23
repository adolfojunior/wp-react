import path from 'path'
import logger from './logger'

const log = logger(`route-public`)

export default function routePublic(app, express) {
  const publicPath = path.join(__dirname, `../public`)

  log.info(`public path: ${publicPath}`)

  app.use(express.static(publicPath))
}
