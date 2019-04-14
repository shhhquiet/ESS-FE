import React from 'react';
import { makeStyles } from '@material-ui/styles';

import businessHours from '../utils/businessHours';
import businessHoursMap from '../utils/businessHoursMap';
import * as vars from '../utils/jssVariables';

// import { timeMap } from '../utils/timeMap';

const styledBy = (property, mapping) => props => mapping[props[property]];

export default function AdminTimeline({ slots }) {
  //* new Array(18).fill([]) was resultin in the forEach populating each array somehow. /*

  let lessons = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

  slots.forEach(slot => {
    lessons[businessHoursMap[slot.time]].push(slot);
  });

  console.log(lessons);

  //   * We need to make a 2d array so that we can easily switch our flex-container to column when we switch to mobile */
  //   function arrayReduce(arr, n) {
  //     return arr.reduce((a, e, i) => {
  //       if (i % n == 0) {
  //         a.push([e]);
  //       } else {
  //         a[a.length - 1].push(e);
  //       }
  //       return a;
  //     }, []);
  //   }

  //   const tuples = arrayReduce(slots, 2);

  return <div>hi</div>;
}
