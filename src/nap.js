const nap = state => {
  return present => {

    if (state.message.date !== undefined) {
      if (state.bomb !== 'TICKING') {
        present({ type: 'TICK' })
        setTimeout(_ => present({ type: 'TACK' }), 1000)
      }
    }
  }
}

export default nap
