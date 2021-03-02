import {combineReducers} from 'redux'
import {issues} from './issueReducer'
import {user} from './userReducer'

export default combineReducers({
    issues:issues,
    user:user,
    
})