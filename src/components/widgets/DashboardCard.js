import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { NumberCircle } from './index';

const useStyles = makeStyles({
  vertical: {},
  left: {
    display: 'flex',
    textAlign: 'left',
  },
  right: {
    display: 'flex',
    textAlign:'right',
  },
  content: {
    marginTop: 'auto',
    marginBottom: 'auto',
    padding: 15,
    '& h4': {
      fontSize: 36,
      color: '#F88',
      textTransform: 'uppercase'
    },
    '& hr': {
      width: 125,
      border: '4px solid #f88',
      borderRadius: 99,
      marginBottom: 15,
    },
    '& p': {
      fontSize: 24,
      color: '#F88',
    },
  }
})

const DashboardCard = props => {

  if (props.type === "up") {
    return <CounterTop { ...props } />
  } else if (props.type === "down") {
    return <CounterBottom { ...props } />
  } else if (props.type === "left") {
    return <CounterLeft { ...props } />
  } else if (props.type === "right") {
    return <CounterRight { ...props } />
  }
}
export default DashboardCard;


const CounterTop = props => {
  const classes = useStyles();
  return (
    <div className={classes.vertical} >
      <NumberCircle align="center" num={props.num} />
      <div className={classes.content}>
        <h4> {props.title} </h4>
        <hr />
        <p> {props.content} </p>
      </div>
    </div>
  )
}


const CounterBottom = props => {
  const classes = useStyles();
  return (
    <div className={classes.vertical} >
      <div className={classes.content}>
        <p> {props.content} </p>
        <hr />
        <h4> {props.title} </h4>
      </div>
      <NumberCircle align="center" num={props.num} />
    </div>
  )
}


const CounterLeft = props => {
  const classes = useStyles();
  return (
    <div className={classes.left} >
      <NumberCircle align="left" num={props.num} />
      <div className={classes.content}>
        <h4> {props.title} </h4>
        <hr align="left" />
        <p> {props.content} </p>
      </div>
    </div>
  )
}


const CounterRight = props => {
  const classes = useStyles();
  return (
    <div className={classes.right} >
      <div className={classes.content}>
        <h4> {props.title} </h4>
        <hr align="right" />
        <p> {props.content} </p>
      </div>
      <NumberCircle align="right" num={props.num} />
    </div>
  )
}