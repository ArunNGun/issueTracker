import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import {useSelector } from 'react-redux';
import IssueCard from '../issueCard/IssueCard';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'3rem'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    minHeight:'65vh',
    borderRadius:'30px',
    maxWidth:450,
    background: 'linear-gradient(to bottom right,rgb(191, 217, 206,0.3),rgba(255,255,255,0))',
    backdropFilter: `blur(1px)`,
    boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
    border:'solid 1px rgba(255,255,255,0.3)'
    
  },
  
}));

const DashBoardGrid=()=> {
  
  const classes = useStyles();
   
    const issues=useSelector(state=>state.issues)
    

   

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant='h5'>Open</Typography>
                {
                    issues && issues.map(issue=>(
                        issue.status==='open'?
                        <IssueCard key={issue.id} issue={issue}/>
                        :null
                        
                    ))
                }
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3}  className={classes.paper}>
                <Typography variant='h5'>In Progress</Typography>
                {
                    issues && issues.map(issue=>(
                        issue.status==='inprogress'?<IssueCard key={issue.id} issue={issue}/>:null
                        
                    ))
                }
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3}  className={classes.paper}>
                <Typography variant='h5'>Closed</Typography>
                {
                    issues && issues.map(issue=>(
                        issue.status==='closed'?
                        <IssueCard key={issue.id} issue={issue}/>
                        :
                        null
                        
                    ))
                }
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoardGrid