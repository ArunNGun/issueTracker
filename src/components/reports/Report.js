import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import AreaChart from './AreaChart'

const useStyles=makeStyles((theme)=>({
    root:{
        minHeight:'80vh',
        maxWidth:'90vw',
        overflow:'hidden',
        background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))',
        backdropFilter: `blur(1px)`,
        boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
        border:'solid 1px rgba(255,255,255,0.3)',
        borderRadius:'20px',
        marginLeft:'auto',
        marginRight:'auto',
    },
    header:{
        color:'#f6feff'
    }
}))

function Report() {
    const classes = useStyles()

    let issues=useSelector(state=>state.issues)
    issues.sort((a,b)=>(a.views>b.views)? 1 :((b.views > a.views)? -1 :0))
    const result=issues.length<5?issues:issues.slice(issues.length-5,issues.length)
    const dataValues=result.map(d=>d.views)
    const dataLabels=result.map(d=>d.id)

    return (
        <div className={classes.root} >
            <AreaChart dataLabels={dataLabels} dataValues={dataValues} />
            <br/>
            <br/>
            <Typography variant='h4' align='center' className={classes.header}>Top 5 most viewed issues</Typography>
        </div>
    )
}

export default Report
