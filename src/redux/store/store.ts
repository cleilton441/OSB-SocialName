import { createStore, combineReducers } from 'redux'
import ShowConfirmState from './ShowConfirm/ShowConfirm.reducer'
import ShowCompleteState from './ShowComplete/ShowComplete.reducer'

const rootReducer = combineReducers({
    showConfirm: ShowConfirmState,
    showComplete: ShowCompleteState
})

const store = createStore(rootReducer)

export default store