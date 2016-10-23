import './main.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { IndexRoute, Router, Route } from 'react-router'
import { configureStore } from './store'
import { configureHistory } from './history'

import App from './components/App'
import Home from './containers/Home'
import Foo from './components/Foo'
import Bar from './components/Bar'

const store = configureStore()
const history = configureHistory(store)
const content = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(content, document.getElementById('root'))
