import React from 'react'
import { connect } from 'react-redux'

import state from '../state'

const App = ({
  // State
  isReady,
  isRunning,
  launched,
  aborted,

  // Store
  message,
  timer,
  countdown,
  store,

  present,
}) => {
  const inc = _ => present({ incrementBy: 1 })
  const dec = _ => present({ decrementBy: 1 })
  const abort = _ => present({ abort: true })
  const start = _ => {
    present({
      status: 'STARTED',
      countdown: timer,
    })
  }
  return (
    <div className="pure-g">
      <div className="pure-u-1-3" style={{ textAlign: 'center' }}>
        <h1>Rocket launcher</h1>
        { launched ?
          <video
              id="gif-mp4"
              poster="https://media.giphy.com/media/9PyhoXey73EpW/200_s.gif"
              width="426"
              height="321"
              autoPlay
              loop>
              <source src="https://media.giphy.com/media/9PyhoXey73EpW/giphy.mp4" type="video/mp4"></source>
              Your browser does not support the mp4 video codec.
          </video>
        : ''}
        { isReady ?
          <div>
            <h2>{ timer }</h2>
            <button className="pure-button" onClick={inc}>+</button>&nbsp;
            <button className="pure-button" onClick={dec}>-</button>&nbsp;
            <button className="pure-button pure-button-primary" onClick={start}>Launch!</button>
            <p>Valid countdown values are 10s to 15s.</p>
          </div>
        : '' }
        { isRunning ?
          <div>
            <h2>Countdown: { countdown }</h2>
            <button className="pure-button" style={{ backgroundColor: 'rgb(223, 117, 20)'}} onClick={abort}>Abort</button>
          </div>
        : '' }
        { aborted ?
          <h2>Aborted :(</h2>
      : '' }
      </div>
      <div className="pure-u-1-3">
        <p>Message: {message ? message : '<no message>'}</p>
        <pre>{JSON.stringify(store).replace(/(,|\{)/g, '$1\n')}</pre>
      </div>
    </div>
  )
}

// This is kinda the State being derived from the Model
const mapStoreToProps = store => ({
  isReady: state.isReady(store),
  isRunning: state.isRunning(store),
  launched: state.launched(store),
  aborted: state.aborted(store),

  message: store.message.payload,
  timer: store.timer,
  countdown: store.countdown,
  store,
})

export default connect(mapStoreToProps)(App)
