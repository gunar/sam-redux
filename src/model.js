import { createStore, combineReducers } from 'redux'
import app from './reducers.js'
import present from './present.js'
import nap from './nap.js'
import DevTools from './containers/DevTools';

const createModel = () => {
  let listeners = []

  const store = createStore(app, undefined, DevTools.instrument())

  const mergeStateToPresent = dataset => {
    present(dataset, store.getState())(store.dispatch)
    nap(store.getState())(mergeStateToPresent);
  }

  return {
    present: mergeStateToPresent,
    store,
  }
}

export default createModel()
