import {SET_ISSUE, GET_ISSUES,REMOVE_ISSUE,UPDATE_ISSUE,UPDATE_VIEWS} from './actionTypes'
import axios from 'axios'
import moment from 'moment'

// import {v4 as uuid} from 'uuid'

export const getIssues=()=>async(dispatch)=>{
    try {
        const {data}=await axios.get('http://localhost:3000/Issues')
        
        dispatch({
            type:GET_ISSUES,
            payload:data,
        })
    } catch (error) {
        console.log(error);
    }
}
export const deleteIssues=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`http://localhost:3000/Issues/${id}`)
        
        dispatch({
            type:REMOVE_ISSUE,
            payload:id,
        })
    } catch (error) {
        console.log(error);
    }
}

export const addIssue=({issueDescription,severity,status,date,user})=>async (dispatch)=>{
    try {
        const data={
            issueDescription,
            severity,
            status,
            views:0,
            date:moment(date).format("MMM Do YYYY"),
            user:user
        }
        await axios.post('http://localhost:3000/Issues',data)

        dispatch({
            type:SET_ISSUE,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateIssue=({id,issueDescription,severity,status})=>async (dispatch)=>{
    try {
        const data={
            id,
            issueDescription,
            severity,
            status,
        }
        await axios.put(`http://localhost:3000/Issues/${id}`,data)
        dispatch({
            type:UPDATE_ISSUE,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}
export const viewCount=(id)=>async (dispatch)=>{
    try {
        const {data}=await axios.get(`http://localhost:3000/Issues/${id}`)
        const views=data.views+1
        const updatedDtata={
            ...data,
            views:views
        }
        await axios.put(`http://localhost:3000/Issues/${id}`,updatedDtata)
        dispatch({
            type:UPDATE_VIEWS,
            payload:{id,views}
        })
    } catch (error) {
        console.log(error);
    }
}