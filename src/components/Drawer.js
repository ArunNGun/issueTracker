import React from 'react'
import {AppBar, CssBaseline, Divider, Drawer as MuiDrawer, Hidden, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';
import {useDispatch} from 'react-redux'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        
      },

    },
    title:{
      background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))',
      backdropFilter: `blur(1px)`,
      boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
      border:'solid 1px rgba(255,255,255,0.3)',
      borderRadius:theme.spacing(1),
      padding:theme.spacing(0.7)
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        // background:'linear-gradient(45deg, #2196F3 20%, #21CBF3 10%)'
        background: 'linear-gradient(45deg,#FE6B8B 1%,rgba(255,255,255,10%))',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      background: 'linear-gradient(to bottom right,rgb(191, 217, 206,0.3),rgba(255,255,255,0))',
      
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0.5),
      background: "linear-gradient(to right top, #777b81, #7d8c92, #849d9c, #95ae9f, #b2bba0)",
    },
    toolLinks:{
      background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))',
      backdropFilter: `blur(1px)`,
      boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
      border:'solid 1px rgba(255,255,255,0.3)',
      borderRadius:'10px',
      maxWidth:drawerWidth-theme.spacing(1),
      margin:theme.spacing(0.5),
      color:'#e6e6e6'
    }
  }));
  
  const Drawer=(props)=> {
    const { window } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    const dispatch = useDispatch()

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    }

    const logOut=()=>{
      dispatch(logoutUser())  
    }

    const itemList=[
        {
            text:'Dashboard',
            icon:<DashboardIcon style={{ color: '#FE6B8B' }}/>,
            onclick:()=>{props.history.push('/')}
        },
        {
          text:'Reports',
          icon:<AssessmentIcon style={{ color: '#FE6B8B' }} />,
          onclick:()=>{props.history.push('/reports')}
      },
      {
          text:'Add Issue',
          icon:<AddIcon style={{ color: '#FE6B8B' }} />,
          onclick:()=>{props.history.push('/addissue')}
      },
      {
          text:props.isLogged?'Log Out':'Login/Signup',
          icon:<AccountCircleIcon style={{ color: '#FE6B8B' }} />,
          onclick:()=>{
            props.isLogged?
            logOut():
            props.history.push('/login')

            }
      }

    ]
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {itemList.map(({text,icon,onclick},index) => 
            (
                    <ListItem className={classes.toolLinks} button onClick={onclick} key={index}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                
             ))}
        </List>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Issue Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          
          <Hidden smUp implementation="css">
            <MuiDrawer
              container={container}
              variant="temporary"
              anchor='left'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </MuiDrawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <MuiDrawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </MuiDrawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography
            variant='h2'
            style={{color:'#ffff'}}
            >
                {props.title}
            </Typography>

            <Divider/>
          {props.children}
        </main>
      </div>
    );
  }

export default withRouter(Drawer)
