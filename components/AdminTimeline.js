import React from 'react';
import { makeStyles } from '@material-ui/styles';

import businessHours from '../utils/businessHours';
import businessHoursMap from '../utils/businessHoursMap';
import * as vars from '../utils/jssVariables';

import Lesson from './Lesson';
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
    margin: '0 3px',
    //borderRight: `1px solid ${vars.timelineBorderColorLight}`
  },
  hour: {
    
    // '&:not(:last-child)': {
    //   borderBottom: `1px solid ${vars.timelineBorderColorLight}`
    // }
  },
  halfHour: {
    border: `1px solid ${vars.timelineBorderColorLight}`,
    display: 'flex',
    justifyContent: 'center',
    height: '5.2vh',
    textAlign: 'center',
    position: 'relative',
    borderRadius: '3px'
    
    //TODO Implement these guide lines higher up the tree
    // '&:not(:last-child)': {
    //   borderBottom: `1px solid ${vars.timelineBorderColorLight}`
    // }
  },
  empty: {
    color: vars.timeColorLight,
    fontSize: '1.2rem',
    fontWeight: 400,
    //verticalAlign: 'middle',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
    // borderRadius: '3px'
  }
});

export default function AdminTimeline({ slots, day, ...props }) {
  const classes = useStyles(props);

  //* new Array(18).fill([]) was resulting in the forEach populating each array identically for some reason. /*
  let lessons = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],[],[],[],[]];
  //let lessons = [...businessHoursMap]
  //*Populates the empty 2d array above with data */
  
  slots.forEach(slot => {
    //console.log(slot, businessHoursMap[slot.time])
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
    <div style={{ width: '14%' }}>
      {/* <div className={classes.day}>{day}</div> */}
      <div className={classes.adminTimeline}>
        {tuples.map((hour, index) => {
          return (
            <div className={classes.hour}>
              <div className={classes.halfHour}>
                {hour[0].length > 0 ? (
                  hour[0].map(lesson => {
                    return <div style={{width: '100%'}}><Lesson lesson={lesson} /></div>;
                  })
                ) : (
                  <div className={classes.empty}>{`${businessHours[index]}:00`}</div>
                )}
              </div>
              <div className={classes.halfHour}>
                {hour[1].length > 0 ? (
                  hour[1].map(lesson => {
                    return <div style={{width: '100%'}}><Lesson lesson={lesson} /></div>;
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
{/* <div className={classes.hours}>{`${businessHours[index]}:30`}</div> */}
