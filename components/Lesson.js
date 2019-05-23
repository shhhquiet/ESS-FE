import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Person from '@material-ui/icons/Person';
import People from '@material-ui/icons/People';
import * as vars from '../utils/jssVariables';

const styledBy = (property, mapping) => props => mapping[props[property]];

const useStyles = makeStyles({
  lesson: {
    padding: '5px 7px',
    fontWeight: 400,
    textAlign: 'left',
    fontSize: '1rem',
    borderBottom: 'none',
    display: 'flex',
    alignItems: 'center',
    color: vars.timeColorWhite,
    flex: '1 1 50%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    placeContent: styledBy('size', {
      3: 'center center'
    }),

    '& svg': {
      margin: '0'
    },

    '&::before': {
      content: styledBy('size', {
        1: "''"
      }),
      height: '100%',
      width:'100%',
      position: 'absolute',
      backgroundImage: styledBy('instructor',{
        Allison:`linear-gradient(to right, ${vars.allisonBackground}00 81%, ${vars.allisonBackground} 93%)`,
        Tiffani:`linear-gradient(to right, ${vars.tiffaniBackground}00 81%, ${vars.tiffaniBackground} 93%)`,
        Lisa:`linear-gradient(to right, ${vars.lisaBackground}00 81%, ${vars.lisaBackground} 93%)`,
        Lori:`linear-gradient(to right, ${vars.loriBackground}00 81%, ${vars.loriBackground} 93%)`,
        Suzi:`linear-gradient(to right, ${vars.suziBackground}00 81%, ${vars.suziBackground} 93%)`,
        Carrie:`linear-gradient(to right, ${vars.carrieBackground}00 81%, ${vars.carrieBackground} 93%)`,
        
      }),
    }
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
  paddingLeft:{
    paddingLeft: '8px'
  }
});

export default function Lesson({ handleClick, ...props }) {
  const classes = useStyles(props);
  const [modalVisible, setModalVisible] = useState(false);
  const { size, instructor, lesson } = props
  console.log(instructor)

  

  return (
    <Fragment>
      <div
        onClick={() => handleClick(lesson)}
        className={`${classes.lesson} ${classes[lesson.instructor]}`}
      >
        {lesson.single ? <Person className={classes.icon} /> : <People className={classes.icon} />}

        {size == 1 ? (
          <Fragment>
            <span className={classes.paddingLeft}>
              {lesson.single ? lesson.student : 
              
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{borderBottom: '1px solid #fafafa'}}>{lesson.student[0]}</span>
                <span>{lesson.student[1]}</span>
              </div>
              }
            </span>
          </Fragment>
        ) : size == 2 ? (
          <Fragment>
            <span className={classes.paddingLeft}>
              {lesson.single ? lesson.student[0] : 
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{borderBottom: '1px solid #fafafa'}}>{lesson.student[0][0]}</span>
                <span>{lesson.student[1][0]}</span>
              </div>
              }
            </span>
          </Fragment>
        ) : null}
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
