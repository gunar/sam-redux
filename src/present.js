const present = (dataset, state) => {
  return dispatch => {

    // This could be optimized
    if (dataset === 'LAUNCH') {
      if (state.counter >= 10 && state.counter <= 15) {
        return dispatch({ type: 'LAUNCH' })
      }
    }


    // Let's not be control-freaks.
    // All unprocessed datasets so far get passed on to Redux
    dispatch(dataset);

  }
}

export default present
