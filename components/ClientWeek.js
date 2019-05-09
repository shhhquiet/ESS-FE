import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';

import Timeline from './Timeline';
import businessHours from '../utils/businessHours';
import days from '../utils/days';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  hours: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '2rem',
    fontWeight: 200,
    marginRight: '1rem',
    marginLeft: '1rem',
    position: 'relative',
    top: '70px',
    '& div': {
      height: '90px',
      borderBottom: '1px solid transparent'
    }
  }
});

export default function Week({
  slotsCollection,
  onClear,
  onAlertUnavailible,
  onAvailible,
  onBooked,
  onClientLookup,
  ...props
}) {
  const events = {
    onClear,
    onAlertUnavailible,
    onAvailible,
    onBooked,
    onClientLookup
  };
  const classes = useStyles(props);
  return (
    <div style={{ display: 'flex' }}>
      <div className={classes.hours}>
        {businessHours.map(hour => (
          <div>{hour}</div>
        ))}
      </div>
      {days.map((day, index) => {
        return (
          <Timeline
            isSunday={index == 0 ? true : false}
            day={day}
            slots={slotsCollection[index]}
            timelineType={'client'}
            {...events}
          />
        );
      })}
    </div>
  );
}
