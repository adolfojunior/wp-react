import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const promise = () => {
  return next => action => {
    const { type, promise } = action

    if (promise) {

      const REQUEST = `${type}_REQUEST`
      const RESOLVE = `${type}_RESOLVE`
      const REJECT = `${type}_REJECTD`

      const result = next({ ...action, type: REQUEST })

      Promise.resolve(promise).then(
        result => next({ ...action, result, type: RESOLVE }), 
        error => next({ ...action, error, type: REJECT })
      )
      return result
    }
    return next(action)
  }
}

const middlewares = [thunk, promise]

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger())
}

export default middlewares
