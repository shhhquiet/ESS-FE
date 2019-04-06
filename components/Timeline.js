import React from 'react';
import { makeStyles } from '@material-ui/styles';

// import { timeMap } from '../utils/timeMap';

const businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

const useStyles = makeStyles({
  day: {
    margin: '2rem 0 0 2rem'
  },
  numbers: {
    display: 'flex'
  },
  timeline: {
    display: 'flex',
    alignContent: 'center',
    border: '1px solid #a8a8a8',
    margin: '0 2rem 2rem 2rem',
    borderRadius: '3px',
    boxShadow: '0 .4rem 1rem rgba(0,0,0, .4)'
  },
  hours: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 200,
    borderBottom: '1px solid #a8a8a8'
  },
  twoBoxes: {
    flex: '1 1 auto'
  },
  box: {
    flex: '1 1 auto',
    position: 'relative',
    height: '90px',
    borderRight: '1px solid #a8a8a8',
    '&:not(:last-child)': {
      borderBottom: '1px dotted #a8a8a8'
    }
  },
  minutes: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.8rem',
    fontWeight: '200',
    color: '#3f3f3f'
  },
  clear: {
    backgroundColor: '#f7f7f7'
  },
  booked: {
    backgroundColor: '#ffb1b1'
  },
  availible: {
    backgroundColor: '#b1e8ff'
  }
});

export default function Timeline({ slots, day }) {
  const classes = useStyles();

  //* We need to unflatten the array so that we can easily switch our flex-container to column when we switch to mobile */
  function arrayReduce(arr, n) {
    return arr.reduce((a, e, i) => {
      if (i % n == 0) {
        a.push([e]);
      } else {
        a[a.length - 1].push(e);
      }
      return a;
    }, []);
  }

  var tuples = arrayReduce(slots, 2);

  return (
    <div>
      <div className={classes.day}>{day}</div>
      <div className={classes.timeline}>
        {tuples.map((tuple, index) => {
          return (
            <div className={classes.twoBoxes}>
              <div className={classes.hours}>{businessHours[index]}</div>
              <div className={`${classes.box} ${classes[tuple[0]]}`}>
                <span className={classes.minutes}>:00</span>
              </div>
              <div className={`${classes.box} ${classes[tuple[1]]}`}>
                <span className={classes.minutes}>:30</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
