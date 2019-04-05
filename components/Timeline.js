import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    height: '200px'
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

const timeMap = [
  '8:00AM',
  '8:30AM',
  '9:00AM',
  '9:30AM',
  '10:00AM',
  '10:30AM',
  '11:00AM',
  '11:30AM',
  '12:00PM',
  '12:30PM',
  '1:00PM',
  '1:30PM',
  '2:00PM',
  '2:30PM',
  '3:00PM',
  '3:30PM',
  '4:00PM',
  '4:30PM'
];

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
