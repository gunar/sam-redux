const MESSAGE_DURATION = 5

const showMessage = message => {
  return dispatch => {

    dispatch({
      type: 'SHOW_MESSAGE',
      message,
      date: (new Date()),
    })

  }
}

const present = (dataset, state) => {
  return dispatch => {
    console.log('Present:', dataset)

    // Action presenting new value to model
    // Model may accept or reject

    const isReady = state.status === 'READY'
    const hasStarted = state.status === 'STARTED'
    const wantsToStart = dataset.status === 'STARTED'
    const timerIsValid = state.timer >= 10 && state.timer <= 15

    if (isReady) {

      if (wantsToStart) {
        // Condition for starting: Valid start time
        if (timerIsValid) {
          dispatch({
            type: 'START',
            countdown: state.timer,
          })
          showMessage('Countdown started!')(dispatch)

        } else {
          showMessage('Launch not allowed')(dispatch)
        }
      }

      if (dataset.incrementBy !== undefined) {
        dispatch({
          type: 'INCREMENT',
          by: dataset.incrementBy,
        })
      }
      if (dataset.decrementBy !== undefined) {
        dispatch({
          type: 'DECREMENT',
          by: dataset.decrementBy,
        })
      }

    } else if (hasStarted) {

      if (dataset.countdown !== undefined) {
        // Action presenting new value for the countdown
        dispatch({ type: 'SET_COUNTDOWN', value: dataset.countdown })
      }

      if (dataset.abort) {
        dispatch({ type: 'ABORT' })
        showMessage('Launch aborted')(dispatch)
      }

    }

    if (dataset.message !== undefined) {
        // Action presenting new value for the message
      if (!dataset.message) {
        // Action wants to clear message
        const elapsed = (new Date() - state.message.date)/1000
        // Verify the current message should be cleared before accepting this
        if (elapsed >= MESSAGE_DURATION-1) {
          dispatch({ type: 'CLEAR_MESSAGE'  })
        }
      }
    }

  }
}

export default present
