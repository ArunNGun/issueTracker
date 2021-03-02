import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import React, { lazy, Suspense, useEffect, useState} from 'react'
// import DashBoardGrid from './dashboardGrid/DashBoardGrid';
import FilteredDashboardGrid from './dashboardGrid/FilteredDashboardGrid';
import { useDispatch } from 'react-redux';
import { getIssues } from '../actions/issueAction';

const DashBoardGrid=lazy(()=>import ('./dashboardGrid/DashBoardGrid'))

const useStyles = makeStyles((theme) => ({
    dashboard:{
      minHeight:'65Vh'
    },
    root: {
      marginTop:'10px',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      minWidth: '40%',
      maxWidth: '70%',
      background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))',
      backdropFilter: `blur(1px)`,
      boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
      border:'solid 1px rgba(255,255,255,0.3)',
      borderRadius:'10px',
      
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color:'#ffff'
      
    },
    iconButton: {
      padding: 10,
    },
  }));

function Dashboard() {
    const classes = useStyles()
    const [term, setTerm] = useState('')
    const dispatch=useDispatch()

    const searchHandler=(e)=>{
        e.preventDefault()
        console.log(term)
    }

    useEffect(() => {
      dispatch(getIssues())
      
    },)

    return (
        <div className={classes.dashboard}>
           
            <Paper component="form" onSubmit={searchHandler} className={classes.root}>
                <InputBase
                className={classes.input}
                placeholder="Search by Description / Number"
                value={term}
                onChange={(e)=>setTerm(e.target.value)}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon style={{ color: '#3f51b5' }} />
                </IconButton>
            </Paper>

            {
              term.length===0
              ?
              <Suspense fallback={"Loading..."}>
              <DashBoardGrid/>
              </Suspense>
              :
              <FilteredDashboardGrid term={term}/>
            }
        </div>
    )
}

export default Dashboard
