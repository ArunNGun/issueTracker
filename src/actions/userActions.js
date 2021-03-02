import axios from "axios";
import { LOGOUT_USER, SET_USER } from "./actionTypes";

export const setUser=(user)=>async (dispatch)=>{
    try {
        await axios.post('http://localhost:3000/Users',user)
           dispatch({
            type:SET_USER,
            payload:user.email
        })
    } catch (error) {
        console.log(error);
    }
}
export const loginUser=(user)=>async (dispatch)=>{
    try {
        const {data}=await axios.get('http://localhost:3000/Users')
        const usr=data.find(u=>u.email===user.email)
        if(usr){
            if(usr.password!==user.password)
            {
                window.alert("password is incorrect")
            }else{
                dispatch({
                    type:SET_USER,
                    payload:user.email
                })
                
            }
        }else{
            window.alert('user not found')
        }
        
    } catch (error) {
        console.log(error);
    }
}
export const logoutUser=()=>async (dispatch)=>{
    try {
        dispatch({
             type:LOGOUT_USER
         })
         window.alert('you have successfully Logged out!')
    } catch (error) {
        console.log(error);
    }
}