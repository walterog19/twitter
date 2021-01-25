import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
  },

  link: {
    flexGrow: 1,
    color: 'white',
    marginLeft: theme.spacing(1),
    marginRight: 0,
    display: 'inline-block',
    verticalAlign: 'right',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <ListItem component={NavLink} to="/">
            <Typography variant="h6" className={classes.title}>
              Twitter
            </Typography>
          </ListItem>

          <ListItem alignItems="right" component={NavLink} to="/login">
            <Typography variant="h6" className={classes.link}>
              Login
            </Typography>
          </ListItem>
          <ListItem alignItems="right" component={NavLink} to="/signin">
            <Typography variant="h6" className={classes.link}>
              Sign In
            </Typography>
          </ListItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}
