import {  Card, CardActions, CardContent, Chip, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const useStyles = makeStyles((theme) => ({
    root: {
        padding:theme.spacing(3),
        background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))',
        backdropFilter: `blur(1px)`,
        boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
        border:'solid 1px rgba(255,255,255,0.3)'
        

      },
      title: {
        fontSize: 14
      },
    paper:{
        minHeight:'60vh',
        background: "linear-gradient(to right, #ff6e7f, #bfe9ff)",
        
    }
  }))
function AlreadyLogged({history}) {

    const classes = useStyles()
    return (
        <div>
           <Paper className={classes.paper} variant="outlined" elevation={3}>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '60vh',minWidth:'100vw' }}
                >

                <Grid item xs={12} sm={6} >
                    <Card className={classes.root}>
                        <CardContent >
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            You are logged in  navigate to dashboard?
                        </Typography>                        
                        </CardContent>
                        <CardActions >
                        <Chip avatar={<ArrowForwardIosIcon/>} label="Go" onClick={()=>history.push('/')} />
                        </CardActions>
                    </Card>


                </Grid>   

                </Grid> 
            
            </Paper> 
        </div>
    )
}

export default withRouter(AlreadyLogged)
