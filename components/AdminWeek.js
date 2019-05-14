import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import AdminTimeline from './AdminTimeline';
import Drawer from '@material-ui/core/Drawer';
import ArrowBack from '@material-ui/icons/ArrowBack';

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
  },
  drawerPaper: {
    width: '30rem',
    // padding: '0 3rem 3rem 3rem',
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem'
  },
  drawerButton: {
    height: '7rem',
    padding: '1.5rem',
    color: vars.timeColorWhite,
    display: 'flex',
    alignItems: 'center',

    '& svg': {
      fontSize: '3rem'
    }
  },
  drawerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.4rem'
  },
  Tiffani: {
    backgroundColor: vars.tiffaniBackground
  },
  Lisa: {
    backgroundColor: vars.lisaBackground
  },
  Allison: {
    backgroundColor: vars.allisonBackground
  },
  Lori: {
    backgroundColor: vars.loriBackground
  },
  Suzi: {
    backgroundColor: vars.suziBackground
  },
  Carrie: {
    backgroundColor: vars.carrieBackground
  }
});

export default function AdminWeek({ slotsCollection, ...props }) {
  const classes = useStyles(props);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [lessonData, setLessonData] = useState({});

  const getDrawerData = data => {
    setLessonData(data);
    setDrawerOpen(true);
  };

  console.log(lessonData);

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
          return (
            <AdminTimeline handleClick={getDrawerData} slots={slotsCollection[index]} day={day} />
          );
        })}
      </div>
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className={`${classes.drawerButton} ${classes[lessonData.instructor]}`}>
          <ArrowBack
            tabIndex={0}
            role='button'
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
          />
        </div>
        <div className={classes.drawerContent}>
          <div>Instructor: {lessonData.instructor}</div>
          <div>Student: {lessonData.student}</div>
          <div>Age: {lessonData.studentAge}</div>
        </div>
      </Drawer>
    </div>
  );
}
