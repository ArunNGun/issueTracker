import { Paper } from '@material-ui/core'
import React from 'react'
import MyForm from './MyForm'

function AddIssue() {

    return (
        <Paper style={{background: "linear-gradient(to right top, #777b81, #7d8c92, #849d9c, #95ae9f, #b2bba0)"}} variant="outlined" elevation={2}>
            <MyForm/>
        </Paper>
    )
}

export default AddIssue
