import {SET_ISSUE,REMOVE_ISSUE, GET_ISSUES,UPDATE_ISSUE, UPDATE_VIEWS} from '../actions/actionTypes'

export const issues=(state=[],action)=>{
    switch (action.type) {
        case GET_ISSUES:
            return action.payload
        case SET_ISSUE:
            return state=[...state,action.payload]    
        case REMOVE_ISSUE:
            return state.filter(issue=>issue.id!==action.payload)
        case UPDATE_ISSUE:
            return state.map(
                    (issue) => issue.id === action.payload.id ? {...issue, issueDescription: action.payload.issueDescription,severity:action.payload.severity,status:action.payload.status}
                                            : issue
                )
        case UPDATE_VIEWS:
            return state.map(
                    (issue) => issue.id === action.payload.id ? {...issue,views:action.payload.views}
                                            : issue
                )
             
        default:
            return state
    }
}
