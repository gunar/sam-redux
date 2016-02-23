const nap = state => {
  return present => {
    let shouldTick = false

    if (state.message.date !== undefined) {
      const MESSAGE_DURATION = 5
      const elapsed = (new Date() - state.message.date)/1000
      
      // -1 because first TACK happens after 1 second
      if (elapsed >= MESSAGE_DURATION-1) {
        present({ type: 'CLEAR_MESSAGE' })
      } else {
        shouldTick = true
      }
    }

    if (state.status === 'STARTED') {
      const elapsed = Math.floor((new Date() - state.start.date)/1000)
      const remaining = state.start.timer - elapsed

      if (remaining === 0) {
        return present({
          type: 'LAUNCH',
        })
      } 
      
      if (state.timer !== remaining) {
        present({
          type: 'SET_TIMER',
          value: remaining,
        })
      }

      if (remaining > 0) {
        shouldTick = true
      }
    }

    if (shouldTick) {
      // A new ticking routine will start on every action
      // I allow this to happen believe that this empty calls 'present()' are cheap
      // and this allows me not to have to keep track of the ticks
      // which would pollute the store/state and the Redux-history
      console.log('Tick!')
      setTimeout(_ => present(), 1000)
    }

  }
}

export default nap
