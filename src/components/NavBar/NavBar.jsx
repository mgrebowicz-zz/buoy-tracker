import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 1,
  },
}));

export default function NavBar({ user, setUser }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  };
  
  return (
    <nav>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Buoy Tracker
            </Typography>
            {/* <SearchBar newBuoy={newBuoy} setNewBuoy={setNewBuoy} /> */}
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>            
            <ListItem button>
              <NavLink 
              exact 
              style={{ 
                  color: "white", textDecoration: "none" 
                }} 
                activeStyle={{ 
                  color: 'yellow' 
                }} 
                to="/favorites">Favorites
              </NavLink>
            </ListItem>          
            <ListItem button>
              <NavLink 
                exact 
                style={{ 
                  color: "white", textDecoration: "none" 
                    }} 
                activeStyle={{ 
                  color: 'yellow' 
                    }} 
                to="/buoys">Buoy Index
              </NavLink>  
            </ListItem> 
            <ListItem>
              <NavLink
                exact
                style={{
                  color: "white", textDecoration: "none"
                }}
                activeStyle={{
                  color: 'yellow'
                }}
                to="/about">About
              </NavLink>  
            </ListItem>         
            <ListItem button>
              <Link to="" style={{ color: "white", textDecoration: "none" }} onClick={handleLogOut}>Log Out</Link>    
            </ListItem>          
          </List>         
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
        </main>
      </div>
      <div>
        <span>Welcome, {user.name}</span>
      </div>
    </nav>
  );
}