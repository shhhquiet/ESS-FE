import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  timeline: {
    display: 'flex'
  },
  box: {
    height: '100px',
    width: '200px',
    border: '1px solid black'
  },
  clear: {
    backgroundColor: 'gray'
  },
  booked: {
      backgroundColor: 'pink',
  },
  availible: {
      backgroundColor: 'blue'
  }
});

export default function Timeline({ slots }) {
  console.log(slots);
  const classes = useStyles();
  return (
    <div className={classes.timeline}>
      {slots.map(slot => {
        return <div className={`${classes.box} + " " + ${classes[slot]}`} />;
      })}
    </div>
  );
}
