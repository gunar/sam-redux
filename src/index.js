import { createStore, combineReducers } from 'redux'
import app from './reducers.js'
import nap from './nap.js'

const createModel = () => {
  let listeners = []
  
  const store = createStore(app)

  store.subscribe(_ => {
    // Update view on store change
    listeners.map(l => l(store.getState()))
  })

  const present = (dataset) => {
    const state = store.getState()

    // This could be optimized
    if (dataset === 'INCREMENT') {
        store.dispatch({ type: 'INCREMENT' })
    }
    if (dataset === 'DECREMENT') {
        store.dispatch({ type: 'DECREMENT' })
    }

    if (dataset === 'LAUNCH') {
      if (state.counter >= 10 && state.counter <= 15) {
        store.dispatch({ type: 'LAUNCH' })
      }
    }

    nap(store.getState())(present);
  }


  const subscribe = listener => {
    listeners.push(listener)
    // Send first state to listener
    listener(store.getState())
  }

  return {
    subscribe,
    present,
  }
}


const model = createModel()

window.model = model

document.write(`
  <h1>Rocket launcher</h1>
  <div id="settings">
    <p>Valid countdown values are 10s to 15s.</p>
    <span id="count"></span>
    <button id="inc">+</button>
    <button id="dec">-</button>
    <button id="launch">Launch!</button>
  </div>
  <pre id="state"></pre>
`)

// Attach actions to buttons
document.getElementById('inc').addEventListener('click', _ => { model.present('INCREMENT') })
document.getElementById('dec').addEventListener('click', _ => { model.present('DECREMENT') })
document.getElementById('launch').addEventListener('click', _ => { model.present('LAUNCH') })

model.subscribe(state => {
  document.getElementById('settings').style.visibility = (state.status === 'STOPPED' ? 'visible' : 'hidden')
  document.getElementById('count').innerHTML = state.counter + 's'
  document.getElementById('state').innerHTML = JSON.stringify(state);
})
