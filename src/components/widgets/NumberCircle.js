import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 225,
    height: 225,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ff9e9e, #F36565)",
    color: "#fff",
    fontSize: 50,
    fontWeight: 600,
    textAlign: "center",
    lineHeight: "225px"
  }
});

const NumberCircle = props => {
  const classes = useStyles();

  
  return (
    <div>
      <div className={classes.root} style={
        props.align &&
          props.align === "center" ? { margin: 'auto' } :
          props.align === "right" ? { marginLeft: 20 } :
            props.align === "left" ? { marginRight: 20 } :
            null} >
        {props.num}
      </div>
    </div>
  )
}
export default NumberCircle;