import React from 'react';

import { makeStyles } from '@material-ui/styles';
import AdminTimeline from './AdminTimeline';
import * as vars from '../utils/jssVariables';
import days from '../utils/days';
import businessHours from '../utils/businessHours';

const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles({
  container: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    //display: 'flex',
    margin: '20px',
    borderRadius: '6px',
    backgroundColor: '#fefefe',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)'
    //boxShadow: vars.timelineBoxShadow,
  },
  date: {
    display: 'flex',
    color: vars.timeColor,
    width: '100%',
    textAlign: 'center'
  },

  hour: {
    height: '5.2vh',
    lineHeight: '5.2vh',
    padding: '0 1.5rem',
    fontSize: '1rem',
    fontWeigtht: 200,
    color: vars.timeColor
  }
});

export default function AdminWeek({ slotsCollection, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.container}>
      <div className={classes.date}>
        {days.map(day => (
          <p style={{ flex: 1 }}>{day}</p>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {businessHours.map(hour => (
            <div>
              <div className={classes.hour}>{hour}:00</div>
              <div className={classes.hour}>{hour}:30</div>
            </div>
          ))}
        </div>
        {days.map((day, index) => {
          return <AdminTimeline slots={slotsCollection[index]} day={day} />;
        })}
      </div>
    </div>
  );
}
