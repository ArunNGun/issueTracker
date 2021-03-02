import { GET_USER,SET_USER,LOGOUT_USER } from "../actions/actionTypes";

export const user=(state=[],action)=>{
    switch (action.type){
        case GET_USER:
            return action.payload
        case SET_USER:
            return action.payload
        case LOGOUT_USER:
            return state=[]
        default:
            return state     
    }
}