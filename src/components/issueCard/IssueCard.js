import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginTop:'2rem',
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:20,
    background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))',
    backdropFilter: `blur(1px)`,
    boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
    border:'solid 1px rgba(255,255,255,0.3)'
  },
  cardActions: {
    display:'flex',
    alignItems:'right',
    
  }
    
});

function IssueCard({issue,history}) {
    const classes=useStyles();
    return (
        <Card onClick={()=>history.push(`/issues/${issue.id}`)} className={classes.root}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="subtitle1" >
                <span style={{color:'#e6e6e6'}}>Number:</span> <strong>{issue.id && issue.id}</strong>    
            </Typography>    
            <Typography gutterBottom variant="subtitle1" >
            <span style={{color:'#e6e6e6'}}>Priority:</span> <strong>{issue.severity}</strong>    
            </Typography>    
            <Typography gutterBottom variant="subtitle1" component="h2">
            <span style={{color:'#e6e6e6'}}>Issue Description:</span><Typography variant="body2"  component="p">
                    <strong>{issue.issueDescription}</strong>
            </Typography>
            </Typography>
            
            </CardContent>
        </CardActionArea>
        <CardActions >
            <IconButton component={Link} to={`issues/${issue.id}`} size="small" >
                <ArrowForwardIosIcon style={{color: '#FE6B8B'}}/>
            </IconButton>
            <Typography variant="subtitle2">{issue.date && issue.date}</Typography> 
        </CardActions>
        </Card>
    )
}

export default withRouter(IssueCard)
