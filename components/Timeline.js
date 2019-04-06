import React from 'react';
import { makeStyles } from '@material-ui/styles';

// import { timeMap } from '../utils/timeMap';

const businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

const useStyles = makeStyles({
  numbers: {
    display: 'flex'
  },
  timeline: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    height: '200px'
  },

  twoBoxes: {
    boxShadow: '0 10px 10px rgba(0,0,0, .6)'
  },
  hours: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 200
  },
  startBox: {
    position: 'relative',
    height: '90px',
    width: '150px',
    border: '1px solid black',
    '&:not(:last-child)': {
      borderBottom: '2px dotted black'
    },
    '&:nth-child(2)': {
      borderTopLeftRadius: '3px'
    },

    '&:nth-child(3)': {
      borderTop: 'none',
      borderBottomLeftRadius: '3px'
    }
  },
  box: {
    position: 'relative',
    height: '90px',
    width: '150px',
    border: '1px solid black',
    borderLeft: 'none',
    '&:not(:last-child)': {
      borderBottom: '2px dotted black'
    },
    '&:nth-child(3)': {
      borderTop: 'none'
    }
  },
  minutes: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '25px',
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

export default function Timeline({ slots }) {
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
    <div className={classes.timeline}>
      {tuples.map((tuple, index) => {
        return (
          <div className={classes.twoBoxes}>
            {/* <div className={classes.hours}>{businessHours[index]}</div> */}
            <div className={`${index === 0 ? classes.startBox : classes.box} ${classes[tuple[0]]}`}>
              <span className={classes.minutes}>:00</span>
            </div>
            <div className={`${index === 0 ? classes.startBox : classes.box} ${classes[tuple[1]]}`}>
              <span className={classes.minutes}>:30</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
