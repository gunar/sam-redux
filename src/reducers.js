import { combineReducers } from 'redux'

const value = (state = 5, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
const message = (state = 'no message', action = {}) => {
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return action.message
    default:
      return state
  }
}
const status = (state = 'STOPPED', action = {}) => {
  switch (action.type) {
    case 'LAUNCH':
      return 'LAUNCHED'
    case 'ABORT':
      return 'ABORTED'
    default:
      return state
  }
}

export default combineReducers({
  value,
  status,
  message,
})
