import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

export function routeTo(path) {
  browserHistory.push(path)
}

// Create an enhanced history that syncs navigation events with the store
export const configureHistory = (store) => syncHistoryWithStore(browserHistory, store)
