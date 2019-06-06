import React from 'react';
import { makeStyles } from '@material-ui/styles';

import businessHours from '../utils/businessHours';
import businessHoursMap from '../utils/businessHoursMap';
import * as vars from '../utils/jssVariables';

import Lesson from './Lesson';
// import { timeMap } from '../utils/timeMap';

const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles({
  timeline: {
    width: '13%'
  },

  adminTimeline: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    margin: '0 3px'
  },


  halfHour: {
    border: `1px solid ${vars.timelineBorderColorLight}`,
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'center',
    height: '5.2vh',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  empty: {
    color: vars.timeColorLight,
    fontSize: '1.2rem',
    fontWeight: 400,
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  }
});

export default function AdminTimeline({ slots, day, handleClick, ...props }) {
  const classes = useStyles(props);
  

  let lessons = Array.from({length:26}, () => new Array());

  //*Populates the empty 2d array above with data */
  console.log(lessons)
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
    <div className={classes.timeline}>
      <div className={classes.adminTimeline}>
        {tuples.map((hour, index) => {
          return (
            <div className={classes.hour}>
              <div className={classes.halfHour}>
                {hour[0].length > 0 ? (
                  hour[0].map((lesson, index) => {
                    return <Lesson handleClick={handleClick} lesson={lesson} instructor={lesson.instructor} size={hour[0].length} />;
                  })
                ) : (
                  <div className={classes.empty}>{`${businessHours[index]}:00`}</div>
                )}
              </div>
              <div className={classes.halfHour}>
                {hour[1].length > 0 ? (
                  hour[1].map((lesson, index) => {
                    return <Lesson handleClick={handleClick} lesson={lesson} instructor={lesson.instructor} size={hour[1].length} />;
                  })
                ) : (
                  <div className={classes.empty}>{`${businessHours[index]}:30`}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// <Lesson classes={classes} lesson={lesson}/>
