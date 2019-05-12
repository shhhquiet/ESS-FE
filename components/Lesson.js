import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Person from '@material-ui/icons/Person';
import People from '@material-ui/icons/People';
import * as vars from '../utils/jssVariables';

const useStyles = makeStyles({
  lesson: {
    flexGrow: 1,
    flexBasis: 0,
    //width: '100%',
    padding: '5px 7px',
    fontWeight: 400,
    textAlign: 'left',
    fontSize: '1rem',
    borderBottom: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: vars.timeColorWhite,
    flex: '1 1 50%',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
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
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '200px',
    width: '200px',
    zIndex: '2'
  },
  icon: {
    margin: '0 5px'
  }
});

export default function Lesson({ lesson, size, ...props }) {
  const classes = useStyles(props);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Fragment>
      <div
        onClick={() => setModalVisible(!modalVisible)}
        className={`${classes.lesson} ${classes[lesson.instructor]}`}
      >
        {lesson.single ? <Person className={classes.icon} /> : <People className={classes.icon} />}

        {size == 1 ? (
          <Fragment>
            <span style={{  }}>{lesson.student}</span>
            <div style={{ fontSize: '.8rem' }}>{lesson.studentAge}</div>
          </Fragment>
        ) : size == 2 ? 
          <Fragment>

            <span style={{  }}>{lesson.student[0]}</span>
            <div style={{ fontSize: '.8rem' }}>{lesson.studentAge}</div>
          </Fragment> :
          null
        }
        {modalVisible ? (
          <div className={`${classes.modal} ${classes[lesson.instructor]}`}>
            <div>{lesson.student}</div>
            <div>{lesson.age}</div>
            {lesson.notes ? (
              <ul>
                {lesson.notes.map(note => {
                  return <li>{note}</li>;
                })}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </Fragment>
  );
}

// {lesson.time.slice(0, -2)} -
