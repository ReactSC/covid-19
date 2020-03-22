import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Link } from '@material-ui/core';
import { Code } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    background: '#FC8282AA',
  },
  brand: {
    color: '#fff',
    fontWeight: 900,
    fontSize: 45,
    textDecoration: 'none',
    textTransform: 'uppercase',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  git: {
    marginLeft: 'auto',
    color: '#fff',
    '& span': {
      color: '#fff',
    }
  }
})

const Navbar = props => {
  const classes = useStyles();
  
  return (
    <AppBar className={ classes.root }>
      <Toolbar>
        <p className={ classes.brand }>
          { props.brand }
        </p>
        <Link
          href="https://github.com/reactsc/covid-19"
          target='_black'
          className={classes.git}>
          <IconButton >
            <Code />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar;