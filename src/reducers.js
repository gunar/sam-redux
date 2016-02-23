import { combineReducers } from 'redux'

const timer = (state = 5, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
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

const bomb = (state = 'TICK', action = {}) => {
  switch (action.type) {
    case 'TICK':
      return 'TICKING'
    case 'TACK':
      return 'TACK'
    default:
      return state
  }
}

export default combineReducers({
  timer,
  status,
  message,
  bomb,
})
