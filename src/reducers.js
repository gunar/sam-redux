import { combineReducers } from 'redux'

const timer = (state = 5, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'SET_TIMER':
      return action.value
    default:
      return state
  }
}
const start = (state = {}, action = {}) => {
  switch (action.type) {
    case 'START':
      return {
        date: action.date,
        timer: action.timer,
      }
    case 'ABORT':
      return {}
    case 'LAUNCH':
      return {}
    default:
      return state
  }
}
const status = (state = 'STOPPED', action = {}) => {
  switch (action.type) {
    case 'START':
      return 'STARTED'
    case 'ABORT':
      return 'ABORTED'
    case 'LAUNCH':
      return 'LAUNCHED'
    default:
      return state
  }
}

const message = (state = {}, action = {}) => {
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return {
        payload: action.message,
        date: action.date,
      }
    case 'CLEAR_MESSAGE':
      return {}
    default:
      return state
  }
}

export default combineReducers({
  timer,
  status,
  start,
  message,
})
