const present = (dataset, state) => {
  return dispatch => {

    const alwaysAllowed = ['INCREMENT', 'DECREMENT', 'TICK', 'TACK'];
    if (dataset.type && alwaysAllowed.indexOf(dataset.type) > -1) {
      dispatch(dataset);
    }

    if (dataset.type === 'TICK') {
      const date = state.message.date
      const now = new Date()
      const diff = now - date
      const elapsed = diff/1000
      if (elapsed >= 2) {
        dispatch({ type: 'CLEAR_MESSAGE' })
      }
    }

    if (dataset === 'LAUNCH') {
      if (state.timer >= 10 && state.timer <= 15) {
        dispatch({ type: 'LAUNCH' })
      } else {
        dispatch({ type: 'SHOW_MESSAGE', message: 'Launch not allowed.', date: (new Date()) });
      }
    }

  }
}

export default present
