const path = require('path')

const base = process.cwd()

module.exports = {
  path: {
    base: base,
    html: path.join(base, 'src/client/index.html'),
    main: path.join(base, 'src/client/main.js'),
    output: path.join(base, 'dist/client')
  },
  vendors: [
    'react',
    'redux',
    'redux-thunk',
    'redux-logger',
    'react-redux',
    'react-router',
    'react-router-redux'
  ]
}
