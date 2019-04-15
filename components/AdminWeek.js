import React from 'react';

import { makeStyles } from '@material-ui/styles';
import AdminTimeline from './AdminTimeline';
import * as vars from '../utils/jssVariables';
import days from '../utils/days';

const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles({
  container: {
    display: 'flex',
    margin: '20px',
    border: `1px solid ${vars.timelineBorderColor}`,
    borderRadius: '3px',
    boxShadow: vars.timelineBoxShadow,
  }
});

export default function AdminWeek({ slotsCollection, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.container}>
      {days.map((day, index) => {
        return <AdminTimeline slots={slotsCollection[index]} day={day} />;
      })}
    </div>
  );
}
