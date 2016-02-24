const state = {}

state.isReady = (store) => store.status === 'READY'

state.launched = (store) => store.status === 'STARTED' && store.countdown === 0

state.isRunning = (store) => !state.isReady(store) && !state.launched(store)

state.aborted = (store) => store.status === 'ABORTED'

export default state
