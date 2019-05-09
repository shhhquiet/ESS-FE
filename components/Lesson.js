import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import * as vars from '../utils/jssVariables';

const useStyles = makeStyles({
  lesson: {
    flex: '1 1',
    padding: '0 0 0 10px',
    fontWeight: 400,
    textAlign: 'left',
    fontSize: '1rem',
    borderBottom: 'none',
    color: vars.timeColorWhite,
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
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '200px',
    width: '200px',
    zIndex: '2'
  }
});

export default function Lesson({ lesson, ...props }) {
  const classes = useStyles(props);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Fragment>
      <div
        onClick={() => setModalVisible(!modalVisible)}
        className={`${classes.lesson} ${classes[lesson.instructor]}`}
      >
        <div>{lesson.student}</div>
        <div style={{ fontSize: '.8rem' }}>{lesson.studentAge}</div>
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
