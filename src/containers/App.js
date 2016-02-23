import React from 'react'
import { connect } from 'react-redux'

const App = ({
  timer,
  isStopped,
  state,
  present,
  message,
}) => {
  const inc = _ => present({ type: 'INCREMENT' })
  const dec = _ => present({ type: 'DECREMENT' })
  const launch = _ => present('LAUNCH')
  return (
    <div>
      <h1>Rocket launcher</h1>
      { isStopped ?
        <div id="settings">
          <p>Valid countdown values are 10s to 15s.</p>
          <p>{ timer }</p>
          <button onClick={inc}>+</button>
          <button onClick={dec}>-</button>
          <button onClick={launch}>Launch!</button>
        </div>
      : '' }
      <p>Message: {message}</p>
      <pre id="state">{JSON.stringify(state)}</pre>
    </div>
  )
}

const mapStateToProps = state => ({
  timer: state.timer,
  isStopped: state.status === 'STOPPED',
  message: state.message.payload,
  state,
})

export default connect(mapStateToProps)(App)
