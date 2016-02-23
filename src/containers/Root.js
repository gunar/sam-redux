import React from 'react';
// TODO
// import { Provider } from 'react-redux';
// import App from './App';
import DevTools from './DevTools';

// <Provider store={store}>
export default ({
  store,
  present,
}) => {
  const state = store.getState();
  const { value, status } = state;
  const inc = _ => present({ type: 'INCREMENT' })
  const dec = _ => present({ type: 'DECREMENT' })
  return (
    <div>
      <h1>Rocket launcher</h1>
      { status !== 'STOPPED' ? '' :
        <div id="settings">
          <p>Valid countdown values are 10s to 15s.</p>
          <p>{ value }</p>
          <button onClick={inc}>+</button>
          <button onClick={dec}>-</button>
          <button id="launch">Launch!</button>
        </div>
      }
      <p>Message: <span id="message"></span></p>
      <pre id="state">{JSON.stringify(state)}</pre>
      <DevTools store={store}/>
    </div>
  )
}
