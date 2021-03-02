import React, {useEffect}from 'react'
import { Grid, IconButton, makeStyles, Paper,Typography } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteIssues,viewCount } from '../../actions/issueAction';

const useStyles=makeStyles((theme)=>({
    root:{
        minHeight:'80vh',
        maxWidth:'900px',
        overflow:'hidden',
        background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))',
        backdropFilter: `blur(1px)`,
        boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
        border:'solid 1px rgba(255,255,255,0.3)',
        borderRadius:'20px',
        marginLeft:'auto',
        marginRight:'auto',
        padding:theme.spacing(5),
        flexGrow:1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'start',
        background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))',
        backdropFilter: `blur(1px)`,
        boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
        border:'solid 1px rgba(255,255,255,0.3)',
        borderRadius:'20px',
        
      },
    form:{
        padding:theme.spacing(1),
    }
}))

const Issue=({match,history})=> {
    const classes = useStyles()
    const id=match.params.id
    const state=useSelector(state=>state.issues.filter(issue=>issue.id===Number(id)))
    const dispatch=useDispatch()

    const deleteHandler=()=>{
        if(window.confirm('This issue will be deleted. Are you sure?')){
        dispatch(deleteIssues(id))
        history.push('/')
        }
    }

    useEffect(() => {
        dispatch(viewCount(Number(match.params.id)))
    },[dispatch,match.params.id])

    return (
        <div className={classes.root} >
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><Typography variant="subtitle2"><strong>Issue Number:</strong>{state.length!==0?state[0].id:''} </Typography></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><Typography variant="subtitle2"><strong>Date:</strong> {state.length!==0?state[0].date:''} </Typography></Paper>
                    </Grid>     
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><Typography variant="subtitle2"><strong>Issue Description:</strong><Typography>{state.length!==0?state[0].issueDescription:''}</Typography> </Typography></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><Typography variant="subtitle2"><strong>Severity:</strong><Typography>{state.length!==0?state[0].severity.toUpperCase():''}</Typography> </Typography></Paper>
                    </Grid>     
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><Typography variant="subtitle2"><strong>Raised By:</strong><Typography>{state.length!==0?state[0].user:''}</Typography> </Typography></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}><Typography variant="subtitle2"><strong>Status:</strong><Typography>{state.length!==0?state[0].status.toUpperCase():''}</Typography> </Typography></Paper>
                    </Grid>     
                </Grid>
                
                <Grid container item xs={12} spacing={1}>
                <Grid item xs={1}>
                <IconButton component={Link} to={`/edit/${state.length!==0?state[0].id:''}`} size="medium" >
                <EditIcon style={{color: '#cf749b'}} />
                </IconButton>
                </Grid>
                <Grid item xs={1}>
                <IconButton onClick={deleteHandler} size="medium" >
                <DeleteIcon style={{color: '#9c112d'}} />
                </IconButton>
                </Grid>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default withRouter(Issue)
