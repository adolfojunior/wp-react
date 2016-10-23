import path from 'path'
import logger from './logger'

const log = logger(`route-client`)

export default function routeClient(app, express) {
  const clientPath = path.join(__dirname, `../client`)

  log.info(`client folder: ${clientPath}`)

  app.use(express.static(clientPath))

  app.get(`*`, function response(req, res) {
    res.sendFile(path.join(clientPath, `index.html`))
  })
}
