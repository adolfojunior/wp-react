import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import middlewares from './middlewares'
import * as reducers from '../reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

export const configureStore = (initialState) => createStore(reducer, initialState, applyMiddleware(...middlewares));
