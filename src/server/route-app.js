import express from 'express'
import logger from './logger'
import routePublic from './route-public'

const log = logger(`route-app`)

const getPort = () => (process.env.PORT || 3000)

export default function routeApp(routeContent) {
  const app = express()
  const port = getPort()

  routePublic(app, express)
  // source must be last, because it will redirect all unknow uri
  if (routeContent) {
    routeContent(app, express)
  }
  // start server
  app.listen(port, `0.0.0.0`, function onAppStart(err) {
    if (err) {
      log.error(err)
    } else {
      log.info(`Started - listening on port ${port}.`)
    }
  })
}
