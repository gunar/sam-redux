import { combineReducers } from 'redux'

const counter = (state = 5, action = {}) => {
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

export default combineReducers({
  counter,
  status,
})
