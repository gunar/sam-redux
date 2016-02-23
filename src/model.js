import { createStore, combineReducers } from 'redux'
import app from './reducers.js'
import present from './present.js'
import nap from './nap.js'
import DevTools from './containers/DevTools';

const createModel = () => {
  let listeners = []
  
  const store = createStore(app, undefined, DevTools.instrument())

  store.subscribe(_ => {
    // Update all listeners on store update
    listeners.forEach(listener => listener(store.getState()))
  })

  const mergeStateToPresent = dataset => {
    present(dataset, store.getState())(store.dispatch)
    nap(store.getState())(present);
  }

  const replaceReducer = nextReducer => {
    currentReducer = nextReducer;
    present({ type: '@@redux/INIT' })
  }
 
  present({ type: '@@redux/INIT' })

  const subscribe = listener => {
    listeners.push(listener)
    // Send current state to new listener
    listener(store.getState())

    return function unsubscribe() {
      var index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  return {
    subscribe,
    present: mergeStateToPresent,
    store,
  }
}

export default createModel()
