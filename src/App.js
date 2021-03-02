import Drawer from './components/Drawer'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddIssue from './components/issue/AddIssue'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { useDispatch } from 'react-redux'
import { getIssues } from './actions/issueAction';
import IssueAdded from './components/IssueAdded'
import Report from './components/reports/Report'
import Issue  from "./components/issue/Issue";
import EditForm from './components/issue/EditForm'
import UserForm from './components/login/UserForm'
import {useSelector} from 'react-redux'
import AlreadyLogged from './components/login/AlreadyLogged'

function App({history}) {
  const dispatch = useDispatch()

  const [isLogged, setisLogged] = useState(false)
  const usr = useSelector(state => state.user)

  useEffect(()=>{
    if(usr.length===0){
      setisLogged(false)
    }else{
      setisLogged(true)
    }
  },[usr])
  
  useEffect (()=>{
    dispatch(getIssues())
},[dispatch])

  return (
    <div style={{minHeight:'100vh',background: "linear-gradient(to right top, #777b81, #7d8c92, #849d9c, #95ae9f, #b2bba0)"}}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BrowserRouter>
       <Route exact path="/login"><Drawer isLogged={isLogged} title='Login'>{isLogged? <AlreadyLogged/>:<UserForm login={true}/>} </Drawer></Route>
       <Route exact path="/signup"><Drawer isLogged={isLogged} title='Sign Up'>{isLogged? <AlreadyLogged/>:<UserForm login={false}/>} </Drawer></Route>
       <Route exact path="/"><Drawer isLogged={isLogged} title='Dashboard'><Dashboard/></Drawer></Route>
       <Route exact path="/reports"><Drawer isLogged={isLogged} title='Reports'><Report/> </Drawer></Route>
       <Route exact path="/addissue">
         <Drawer isLogged={isLogged} title='Add Issues'>
          {isLogged?
            <AddIssue/>:
            <Redirect to="/login" />
          } 
          </Drawer>
        </Route>
       <Route exact path="/issueadded"><Drawer isLogged={isLogged} > <IssueAdded /> </Drawer></Route>
       <Route exact path="/issues/:id">
        <Drawer isLogged={isLogged} >
        {isLogged?
          <Issue />:
          <Redirect to="/login" />
        } 
        </Drawer></Route>
       <Route exact path="/edit/:id">
        <Drawer isLogged={isLogged} >
        {isLogged?
          <EditForm /> :
          <Redirect to="/login" />
        } 
          
        </Drawer></Route>
      </BrowserRouter>
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default App
