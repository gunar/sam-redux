const MESSAGE_DURATION = 5
import state from './state'

const nap = store => {
  return present => {

    if (store.message.payload) {
      // We don't need to worry about hiding the wrong message
      // because in SAM the model can choose wheter to accept this value
      setTimeout(_ => present({ message: '' }), MESSAGE_DURATION*1000)
    }

    if (state.isRunning(store)) {
      setTimeout(_ => present({ countdown: store.countdown - 1 }), 1000)
    }

  }
}

export default nap
