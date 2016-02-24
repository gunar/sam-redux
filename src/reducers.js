import { combineReducers } from 'redux'

const timer = (state = 5, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.by
    case 'DECREMENT':
      return state - action.by
    case 'SET_TIMER':
      return action.value
    default:
      return state
  }
}

const countdown = (state = 0, action = {}) => {
  switch (action.type) {
    case 'DECREASE_COUNTDOWN':
      return state - action.by
    case 'SET_COUNTDOWN':
      return action.value
    case 'START':
      return action.countdown
    default:
      return state
  }
}

const status = (state = 'READY', action = {}) => {
  switch (action.type) {
    case 'START':
      return 'STARTED'
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
    case 'ADD_TIMEOUT':
      return {
        ...state,
        hasTimeout: true,
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
  message,
  countdown,
})
