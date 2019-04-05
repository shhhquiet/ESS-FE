import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { timeMap } from '../utils/timeMap';

const useStyles = makeStyles({
  timeline: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    height: '205px'
  },
  box: {
    height: '90px',
    width: '150px',
    border: '1px solid black'
  },
  clear: {
    backgroundColor: 'gray'
  },
  booked: {
    backgroundColor: 'pink'
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
      {slots.map((slot, index) => {
        return <div className={`${classes.box} + " " + ${classes[slot]}`}>{timeMap[index]}</div>;
      })}
    </div>
  );
}
