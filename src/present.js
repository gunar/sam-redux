const present = (dataset, state) => {
  return dispatch => {

    if (dataset === undefined) {
      // ignore TICK
      return
    }

    if (dataset && dataset.type) {

      const alwaysAllowed = ['INCREMENT', 'DECREMENT', 'CLEAR_MESSAGE', 'SET_TIMER', 'LAUNCH'];
      if (alwaysAllowed.indexOf(dataset.type) > -1) {
        dispatch(dataset)
      }

      if (dataset.type === 'ABORT') {
        if (state.status === 'STARTED') {
          dispatch(dataset)
          dispatch({
            type: 'SHOW_MESSAGE',
            message: 'Launch aborted.',
            date: (new Date()),
          })
        }
      }

      if (dataset.type === 'START') {

        if (state.timer >= 10 && state.timer <= 15) {
          dispatch({
            type: 'START',
            date: (new Date()),
            timer: state.timer,
          })
          dispatch({
            type: 'SHOW_MESSAGE',
            message: 'Countdown started.',
            date: (new Date()),
          })

        } else {
          dispatch({ type: 'SHOW_MESSAGE', message: 'Launch not allowed.', date: (new Date()) })
        }
      }

    } else {
      console.error('Dataset invalid:', dataset)
    }

  }
}

export default present
