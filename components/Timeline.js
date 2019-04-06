import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { timeMap } from '../utils/timeMap';

const useStyles = makeStyles({
  timeline: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    height: '200px'
  },

  twoBoxes: {
    color: 'red',
    '&:first-child': {
      borderLeft: '1px solid black'
    }
  },
  box: {
    height: '90px',
    width: '150px',
    border: '1px solid black',
    borderLeft: 'none',
    '&:not(:last-child)': {
      borderBottom: '2px dotted black'
    },
    '&:nth-child(2)': {
      borderTop: 'none'
    }
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
          <div className={`${classes.twoBoxes}`}>
            <div className={`${classes.box} ${classes[tuple[0]]}`}>{timeMap[index][0]}</div>
            <div className={`${classes.box} ${classes[tuple[1]]}`}>{timeMap[index][1]}</div>
          </div>
        );
      })}
    </div>
  );
}
