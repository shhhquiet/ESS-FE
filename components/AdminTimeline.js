import React from 'react';
import { makeStyles } from '@material-ui/styles';

import businessHours from '../utils/businessHours';
import businessHoursMap from '../utils/businessHoursMap';
import * as vars from '../utils/jssVariables';
import { keys } from '@material-ui/core/styles/createBreakpoints';

// import { timeMap } from '../utils/timeMap';

const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles({
  day: {
    margin: '2rem 0 0 2rem',
    display: 'inline'
  },
  adminTimeline: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    borderRight: `1px solid ${vars.timelineBorderColorLight}`,

    // '&:last-child':{
    //   borderRight:'none'
    // }
  },
  hour: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${vars.timelineBorderColor}`
    }
  },
  halfHour: {
    display: 'flex',
    justifyContent: 'center',
    height: '5.2vh',
    textAlign: 'center'
    //TODO Implement these guide lines higher up the tree
    // '&:not(:last-child)': {
    //   borderBottom: `1px solid ${vars.timelineBorderColorLight}`
    // }
  },
  lesson: {
    flex: '1 1',
    fontSize: '1.4rem',
    color: vars.timeColorLight,
    fontWeight: 200,
    padding: '0 0 0 10px'
  },
  Tiffani: {
    backgroundColor: '#fd3a3a',
    fontWeight: 400,
    textAlign: 'left',
    fontSize: '1rem',
    borderBottom: 'none',
    color: vars.timeColorWhite
  },
  Lisa: {
    backgroundColor: '#6262ff',
    fontWeight: 400,
    textAlign: 'left',
    fontSize: '1rem',
    borderBottom: 'none',
    color: vars.timeColorWhite
  },
  Allison: {
    backgroundColor: '#1bb91b',
    fontWeight: 400,
    textAlign: 'left',
    fontSize: '1rem',
    borderBottom: 'none',
    color: vars.timeColorWhite
  }
});

export default function AdminTimeline({ slots, day, ...props }) {
  const classes = useStyles(props);

  //* new Array(18).fill([]) was resulting in the forEach populating each array identically for some reason. /*
  let lessons = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

  //*Populates the empty 2d array above with data */
  slots.forEach(slot => {
    lessons[businessHoursMap[slot.time]].push(slot);
  });

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

  const tuples = arrayReduce(lessons, 2);

  return (
    <div style={{width: '100%'}}>
      {/* <div className={classes.day}>{day}</div> */}
      <div className={classes.adminTimeline}>
        {tuples.map((hour, index) => {
          return (
            <div className={classes.hour}>
              <div className={classes.halfHour}>
                {hour[0].length > 0 ? (
                  hour[0].map(lesson => {
                    return (
                      <div className={`${classes.lesson} ${classes[lesson.instructor]}`}>
                        <div>{lesson.student}</div>
                        <div style={{fontSize: '.8rem'}}>{lesson.studentAge}</div>
                      </div>
                    );
                  })
                ) : (
                  <div className={classes.lesson}>{`${businessHours[index]}:00`}</div>
                )}
              </div>
              <div className={classes.halfHour}>
                {hour[1].length > 0 ? (
                  hour[1].map(lesson => {
                    return (
                      <div className={`${classes.lesson} ${classes[lesson.instructor]}`}>
                        <div>{lesson.student}</div>
                        <div style={{fontSize: '.8rem'}}>{lesson.studentAge}</div>}
                      </div>
                    );
                  })
                ) : (
                  <div className={classes.lesson}>{`${businessHours[index]}:30`}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
