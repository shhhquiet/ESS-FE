import React from 'react';

import { makeStyles } from '@material-ui/styles';
import AdminTimeline from './AdminTimeline';
import * as vars from '../utils/jssVariables';
import days from '../utils/days';

const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles({
  container: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    //display: 'flex',
    margin: '20px',
    //maxHeight: 'calc(100vh) - 40px',
    //overflow: 'auto',
    //position: 'relative',
    //overflow: 'scroll',
    //position: 'relative',
    //border: `1px solid ${vars.timelineBorderColor}`,
    borderRadius: '6px',
    backgroundColor: '#fefefe',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
    //boxShadow: vars.timelineBoxShadow,
  },
  date: {
    display: 'flex',
    //position: 'fixed',
    // top: 0,
    color: '#a8a8a8',
    // right: 0,
    width: '100%',
    //height: '20px',
    textAlign: 'center'
    
  }
});

export default function AdminWeek({ slotsCollection, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.container}>
    <div className={classes.date}>{days.map(day => <p style={{flex: 1}}>{day}</p>)}</div>
    <div style={{overflow: 'auto', display: 'flex', height: 'calc(100vh - 40px)'}}>
      {days.map((day, index) => {
        return <AdminTimeline slots={slotsCollection[index]} day={day} />;
      })}
      </div>
    </div>
  );
}
