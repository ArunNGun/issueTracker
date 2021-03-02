import React from 'react'
import { loginUser, setUser } from '../../actions/userActions'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
    email:yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
    password:yup.string("").min(8, "Password must contain at least 8 characters").required("Enter your password"),
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
    buttonsSec:{
      margin:theme.spacing(0.3),
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      
    },
    buttonsPri:{
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


function UserForm({login}) {
    const classes=useStyles()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          email:'',
          password:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const user={
                        email:values.email,
                        password:values.password
                    }
            dispatch(login?loginUser(user):setUser(user))
            
        }
      });

    return (
            <div className={classes.formWrapper}>
                <Typography style={{color:'#e6e6e6'}} variant="subtitle1" >testing creds: test@test.com / testpassword</Typography>
                
                <form className={classes.root} onSubmit={formik.handleSubmit}>
                    <TextField
                    fullWidth
                    autoComplete='off'
                    variant="outlined"
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputProps={{
                        className: classes.textColor
                    }}
                    />
                    
                    <TextField
                    type="password"
                    variant="outlined"
                    autoComplete='off'
                    label="Password"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    fullWidth
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    InputProps={{
                        className: classes.textColor
                    }}
                    />
                    
                    <Button color="primary"  className={classes.buttonsPri} variant="contained"  type="submit">
                    {login?'Login':'Signup'}
                    </Button>
                    <Button component={Link} to={login?'/signup':'/login'} className={classes.buttonsSec} variant="contained">
                    {login?'Signup':'Login'}
                    </Button>
                </form>
            </div>
            
    )
}

export default UserForm


