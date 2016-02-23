import React from 'react'
import { connect } from 'react-redux'

const App = ({
  value,
  isStopped,
  state,
  present,
}) => {
  const inc = _ => present({ type: 'INCREMENT' })
  const dec = _ => present({ type: 'DECREMENT' })
  return (
    <div>
      <h1>Rocket launcher</h1>
      { isStopped ?
        <div id="settings">
          <p>Valid countdown values are 10s to 15s.</p>
          <p>{ value }</p>
          <button onClick={inc}>+</button>
          <button onClick={dec}>-</button>
          <button id="launch">Launch!</button>
        </div>
      : '' }
      <p>Message: <span id="message"></span></p>
      <pre id="state">{JSON.stringify(state)}</pre>
    </div>
  )
}

const mapStateToProps = state => ({
  value: state.value,
  isStopped: state.status === 'STOPPED',
  state,
})

export default connect(mapStateToProps)(App)
