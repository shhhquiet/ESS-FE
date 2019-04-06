import React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as vars from '../utils/jssVariables';

// import { timeMap } from '../utils/timeMap';

const businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles({
  day: {
    margin: '2rem 0 0 2rem',
    display: 'inline'
  },
  numbers: {
    display: 'flex'
  },
  timeline: {
    display: 'flex',
    alignContent: 'center',
    border: `1px solid ${vars.timelineBorderColor}`,
    margin: '0 2rem 2rem 2rem',
    borderRadius: '3px',
    boxShadow: vars.timelineBoxShadow
  },
  hours: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 200,
    borderBottom: `1px solid ${vars.timelineBorderColor}`
  },
  twoBoxes: {
    flex: '1 1 auto'
  },

  box: {
    flex: '1 1 auto',
    position: 'relative',
    height: '90px',
    borderRight: `1px solid ${vars.timelineBorderColor}`,
    '&:not(:last-child)': {
      borderBottom: `1px solid ${vars.timelineBorderColor}`
    }
  },
  minutes: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.8rem',
    fontWeight: '200',
    color: vars.timeColor
  },
  clear: {
    backgroundColor: vars.timelineClear
  },
  booked: {
    backgroundColor: vars.timelineBooked
  },
  availible: {
    backgroundColor: vars.timelineAvailible
  }
});

export default function Timeline({ slots, day, onClear, onAvailible, onBooked, ...props }) {
  //*I don't know why this has to be destructured from this scope but it does.
  //* Passing props in as an argument to useStyles is mandatory
  const { color } = props;
  const classes = useStyles(props);
  //* */

  //* We need to make a 2d array so that we can easily switch our flex-container to column when we switch to mobile */
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

  const handleClick = (state, slot) => {
    if (state === 'clear') {
      onBooked(slot);
    } else if (state === 'booked') {
      onClear(slot);
    }
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
              <div onClick={()=> handleClick(tuple[0], index)} className={`${classes.box} ${classes[tuple[0]]}`}>
                <span className={classes.minutes}>:00</span>
              </div>
              <div onClick={()=> handleClick (tuple[1], index)}  className={`${classes.box} ${classes[tuple[1]]}`}>
                <span className={classes.minutes}>:30</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
