import { combineReducers } from 'redux'
import utilityReducer from './utilityReducer'

const rootReducer = combineReducers({
  utility: utilityReducer,
})

export default rootReducer