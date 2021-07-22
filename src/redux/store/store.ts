import { createStore, combineReducers } from 'redux'
import ShowConfirmState from './Confirmpop/Confirmpop.reducer'
import ShowConfirmBox from './ShowConfirmBox/ShowConfirmBox.reducer'

const rootReducer = combineReducers({
    
    Confirmpop: ShowConfirmState,
    ShowConfirmBox: ShowConfirmBox,

})

const store = createStore(rootReducer)

export default store
