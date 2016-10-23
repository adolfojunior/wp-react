import url from 'url'
import proxy from 'express-http-proxy'
import logger from './logger'

// const log = logger(`proxy`)

// function proxyApi (name, config = {}) {
//   const { protocol, host, port, auth } = config
//   const proxyUrl = `${protocol}://${host}`

//   log.info(`proxy ${name} api: ${proxyUrl}:${port}`)

//   return proxy(proxyUrl, {
//     port: port,
//     forwardPath(req, res) {
//       const path = url.parse(req.url).path
//       log.info(`API: ${path}`)
//       return path
//     },
//     decorateRequest: function(req) {
//       if (auth) {
//         req.headers[`Authorization`] = `Basic ${auth}`
//       }
//       return req
//     }
//   })
// }

// function fanflowApi() {
//   return wordpressApi(`wordpress`, {
//     protocol: `http`,
//     host: `wordpress.com`,
//     port: 80
//   })
// }

export default function routeProxy(app, express) {
  // app.use(`/api`, wordpressApi())
}
