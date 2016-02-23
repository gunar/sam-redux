import React from 'react'
import { connect } from 'react-redux'

const App = ({
  timer,
  isStopped,
  isRunning,
  launched,
  aborted,
  state,
  present,
  message,
}) => {
  const inc = _ => present({ type: 'INCREMENT' })
  const dec = _ => present({ type: 'DECREMENT' })
  const abort = _ => present({ type: 'ABORT' })
  const start = _ => present({type: 'START' })
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
        { isStopped ?
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
            <h2>Countdown: { timer }</h2>
            <button className="pure-button" style={{ backgroundColor: 'rgb(223, 117, 20)'}} onClick={abort}>Abort</button>
          </div>
        : '' }
        { aborted ?
          <h2>Aborted :(</h2>
      : '' }
      </div>
      <div className="pure-u-1-3">
        <p>Message: {message ? message : '<no message>'}</p>
        <pre>{JSON.stringify(state).replace(/(,|\{)/g, '$1\n')}</pre>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  timer: state.timer,
  isStopped: state.status === 'STOPPED',
  isRunning: state.status === 'STARTED',
  launched: state.status === 'LAUNCHED',
  aborted: state.status === 'ABORTED',
  message: state.message.payload,
  state,
})

export default connect(mapStateToProps)(App)
