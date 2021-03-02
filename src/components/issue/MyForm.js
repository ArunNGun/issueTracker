import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography, FormControl, makeStyles, MenuItem,  FormLabel, RadioGroup, FormControlLabel, Radio, Icon } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { addIssue} from '../../actions/issueAction';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';


const validationSchema = yup.object({
  issueNumber:yup.number(),
  issueDescription: yup.string().required("This field is required."),
  severity: yup.string().required("Severity field is required."),

});

  const useStyles = makeStyles ((theme) => ({
    formWrapper:{
      margin:theme.spacing(1),
      padding:theme.spacing(2),
      marginLeft:'auto',
      marginRight:'auto',
      maxWidth:'500px',
      borderRadius:'20px',
      background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))',
      backdropFilter: `blur(1px)`,
      boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
       border:'solid 1px rgba(255,255,255,0.3)'
    },
    root: {
     '& .MuiTextField-root': {
        margin: theme.spacing(2),
        maxWidth:400,
        display:"flex",
        marginLeft: 'auto',
        marginRight: 'auto',
        
      },
     '& .MuiFormControl-root': {
        margin: theme.spacing(2),
        maxWidth:400,
        display:"flex",
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      maxWidth:'550px'
    },
    buttonsReset:{
      margin:theme.spacing(0.3),
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      
    },
    buttonsSubmit:{
      margin:theme.spacing(0.3),
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    textColor:{
      color:'#e6e6e6'
    },

    
  }));


  
  function MyForm({history}) {
    
    const classes = useStyles()
    const dispatch = useDispatch()
    const usr=useSelector(state=>state.user)
  const formik = useFormik({
    initialValues: {
      issueDescription:'',
      severity:'',
      status:'open',
      date:new Date()
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data={
        ...values,
        user:usr
      }
      console.log(data)
      if(window.confirm("Please confim submition of the issue")){
      dispatch(addIssue(data))
      history.push('/issueadded')
    }
    }
  });

  return (
    
    <div className={classes.formWrapper}>
      <Typography style={{color:'#e6e6e6'}} variant="subtitle1" >Please fill the following details</Typography>
      
      <form className={classes.root} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          multiline
          variant="outlined"
          id="issueDescription"
          name="issueDescription"
          label="Issue Description"
          value={formik.values.issueDescription}
          onChange={formik.handleChange}
          error={formik.touched.issueDescription && Boolean(formik.errors.issueDescription)}
          helperText={formik.touched.issueDescription && formik.errors.issueDescription}
          InputProps={{
            className: classes.textColor
          }}
        />
        
        <TextField
        select
        variant="outlined"
          label="Severity"
          name="severity"
          id="severity"
          value={formik.values.severity}
          onChange={formik.handleChange}
          fullWidth
          error={formik.touched.severity && Boolean(formik.errors.severity)}
          helperText={formik.touched.severity && formik.errors.severity}
          InputProps={{
            className: classes.textColor
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"major"}>Major</MenuItem>
          <MenuItem value={"minor"}>Minor</MenuItem>
          <MenuItem value={"critical"}>Critical</MenuItem>
        </TextField>
        

        <FormControl className={classes.root} component="fieldset">
          <FormLabel style={{color:'#e6e6e6'}} component="legend">Status</FormLabel>
          <RadioGroup  aria-label="Status" name="status" value={formik.values.status} onChange={formik.handleChange}>
          <FormControlLabel style={{color:'#e6e6e6'}} value="open" control={<Radio color="primary" />} label="Open" />
          <FormControlLabel style={{color:'#e6e6e6'}} value="inprogress" control={<Radio color="primary" />} label="In Progress" />
          <FormControlLabel style={{color:'#e6e6e6'}} value="closed" control={<Radio color="primary" />} label="Closed" />
          </RadioGroup>
        </FormControl>

        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date"
          name="date"
          label="Date"
          value={formik.values.date}
          onChange={(e)=>formik.setFieldValue("date", e)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
            
          }}
          
        />
        
        <Button color="primary"  className={classes.buttonsSubmit} variant="contained"  type="submit">
        <Icon >add_circle</Icon>Add
        </Button>
        <Button color="secondary" className={classes.buttonsReset} variant="contained" onClick={formik.resetForm}  type="reset">
          Reset
        </Button>
      </form>
    </div>
  );

}

export default withRouter(MyForm)

