import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, IconButton, Link } from '@material-ui/core';
import { Facebook, Twitter, LinkedIn, GitHub, Instagram } from '@material-ui/icons';

const useStyles = makeStyles({
  icon: {
    margin: 5,
    "& span": {
      color: "#fff",
    }
  }
});

const SocialLinks = props => {

  return (
    <Toolbar>
      <div className='mx-auto'>
        <Icon url="https://facebook.com/schoolwab/">
          <Facebook />
        </Icon>

        <Icon url="https://twitter.com/schoolwab/">
          <Twitter />
        </Icon>

        <Icon url="https://instagram.com/schoolwab/">
          <Instagram />
        </Icon>

        <Icon url="https://linkedin.com/in/schoolwab/">
          <LinkedIn />
        </Icon>

        <Icon url="https://github.com/schoolwab/">
          <GitHub />
        </Icon>
      </div>
    </Toolbar>
  );
}
export default SocialLinks;

const Icon = props => {
  const classes = useStyles();
  return (
    <Link href={ props.url } target="_blank" className={ classes.icon } >
      <IconButton>
        { props.children }
      </IconButton>
    </Link>
  )
}