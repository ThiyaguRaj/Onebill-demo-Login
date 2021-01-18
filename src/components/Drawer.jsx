import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './home.css';
import Plist from './ProductList.json';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Product from './Product';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withRouter } from "react-router";

const data = ['OnePlus', 'Samsung', 'Apple']
const sportList = ['Shoes', 'Bats', 'Balls', 'T-Shirts', 'TrackPhants']
// , 'MI', 'OppO', 'Vivo', 'Jio', 'Huawei', 'Micromax', 'LG', 'Lenivo', 'Intex', 'Velevet'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: "#E16036",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: '170px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: "170px",
  },
  drawerContainer: {
    background: "#424141",

    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function ClippedDrawer(props) {

  const [open, setOpen] = useState(true);
  const [cloth, setCloth] = useState(true);
  const [sport, setSport] = useState(true);
  const [val, setVal] = useState({})

  useEffect(() => {
    setVal(JSON.parse(localStorage.getItem("user")));
  }, [])

  const handleClick = () => {
    setOpen(!open);
  };
  const handleCloth = () => {
    setCloth(!cloth);
  };
  const handleSports = () => {
    setSport(!sport);
  };

  const handleOut=()=>{
    localStorage.removeItem("user");
    props.history.push('/login');
  }

  const classes = useStyles();

  if (JSON.parse(localStorage.getItem("user"))) {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              <span className="cname">One</span><span className="text-muted">Shoppie</span>
            </Typography>
            <div className="ml-auto">
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>
            <div className="ml-auto">
              <Button variant="outlined" color="light" className="ml-1 cart" onClick={handleOut}>
                Logout
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer} id="list">

            <List>
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Mobiles" className="ml-2 menuitem" />
                {open ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {data.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem button onClick={handleCloth}>
                <ListItemText primary="Fashion" className="ml-2 menuitem" />
                {cloth ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={cloth} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Plist.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem button onClick={handleSports}>
                <ListItemText primary="Sports" className="ml-2 menuitem" />
                {sport ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={sport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {sportList.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem button onClick={handleSports}>
                <ListItemText primary="Gaming" className="ml-2 menuitem" />
                {sport ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={sport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {sportList.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem button onClick={handleSports}>
                <ListItemText primary="Kitchen" className="ml-2 menuitem" />
                {sport ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={sport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {sportList.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem button onClick={handleSports}>
                <ListItemText primary="Food" className="ml-2 menuitem" />
                {sport ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={sport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {sportList.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem button onClick={handleSports}>
                <ListItemText primary="Network" className="ml-2 menuitem" />
                {sport ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={sport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {sportList.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem button onClick={handleSports}>
                <ListItemText primary="Movies" className="ml-2 menuitem" />
                {sport ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={sport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {sportList.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem button onClick={handleSports}>
                <ListItemText primary="Automobile" className="ml-2 menuitem" />
                {sport ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={sport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {sportList.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
            <List>
              <ListItem button onClick={handleSports}>
                <ListItemText primary="Machinary" className="ml-2 menuitem" />
                {sport ? <ExpandLess id="icn" /> : <ExpandMore id="icn" />}
              </ListItem>
              <Collapse in={sport} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {sportList.map((text, index) => (
                    <ListItem button className={classes.nested} className="pl-4">
                      <ListItemText className="text-light" primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className="row">
            <div className="col-md-7 text-justify mid bg-light mt-4">
              <main className={classes.content}>
                <Toolbar />
                <Product />
              </main>
            </div>
            <div className="col-md-5 text-justify">
              <main className={classes.content}>
                <Toolbar />
                <div className="text-center">
                  <AccountCircleIcon className="usericon" />
                  <div className="mt-4">
                    <p><strong>Welcome <span className="text-primary">{val.email}</span> !</strong></p><hr/>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>

    );
  } else {
    return (
      <h5 className="text-center logerr">Please <button className="reg text-primary" id="logerr" onClick={() => { props.history.push("/login") }}>Login</button> to Continue !</h5>
    )
  }
}

export default withRouter(ClippedDrawer);