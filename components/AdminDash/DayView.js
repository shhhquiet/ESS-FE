import React from 'react';
import AdminTimeline from '../AdminTimeline'

const testSlots = [
  {
    time: '9:00AM',
    instructor: 'Allison',
    single: false,
    student: ["L'il Timmy", "L'il Jimmy"],
    studentAge: 7,
    notes: null
  },
  {
    time: '10:00AM',
    instructor: 'Allison',
    single: false,
    student: ['Tits McGee', 'Ron Burgundy?'],
    studentAge: 7,
    notes: null
  },
  {
    time: '10:30AM',
    instructor: 'Allison',
    single: true,
    student: 'holden',
    studentAge: 7,
    notes: null
  },
  {
    time: '11:00AM',
    instructor: 'Allison',
    single: true,
    student: 'Trevor',
    studentAge: 7,
    notes: null
  },
  {
    time: '11:30AM',
    instructor: 'Allison',
    single: true,
    student: 'Lauren',
    studentAge: 7,
    notes: null
  },
  {
    time: '12:00PM',
    instructor: 'Allison',
    single: true,
    student: 'Yasirah',
    studentAge: 7,
    notes: null
  },
  {
    time: '12:30PM',
    instructor: 'Allison',
    single: true,
    student: "O'Rourke",
    studentAge: 7,
    notes: null
  },
  {
    time: '1:00PM',
    instructor: 'Suzi',
    single: true,
    student: 'Nick (Batman)',
    studentAge: 14,
    notes: null
  },
  {
    time: '1:00PM',
    instructor: 'Allison',
    single: true,
    student: 'Simmons',
    studentAge: 14,
    notes: null
  },
  {
    time: '1:00PM',
    instructor: 'Lisa',
    single: true,
    student: 'Simmons',
    studentAge: 14,
    notes: null
  },
  {
    time: '1:30PM',
    instructor: 'Suzi',
    single: true,
    student: 'Bondor',
    studentAge: 14,
    notes: null
  },
  {
    time: '1:30PM',
    instructor: 'Allison',
    single: true,
    student: 'Eileen',
    studentAge: 14,
    notes: null
  },
  {
    time: '3:00PM',
    instructor: 'Allison',
    single: true,
    student: 'Nedim',
    studentAge: 14,
    notes: null
  },
  {
    time: '3:30PM',
    instructor: 'Allison',
    single: true,
    student: 'Kai',
    studentAge: 14,
    notes: null
  }
  // {
  //   time: '9:00AM',
  //   instructor: 'Lisa',
  //   student: 'Bblo',
  //   studentAge: 24,
  //   notes: ['Nerd', 'Weird Arms', 'Freakishly Long Hair']
  // },
  // { time: '9:00AM', instructor: 'Allison', student: 'Suzie', studentAge: 14, notes: null },
  // {
  //   time: '2:00PM',
  //   instructor: 'Allison',
  //   student: 'Trevbun',
  //   studentAge: 37,
  //   notes: ['Handsome af', 'cool dude']
  // },
  // { time: '2:30PM', instructor: 'Tiffani', student: 'Jimmy', studentAge: 12, notes: null }
];

const DayView = () => {
  return (
    <div style={{height: '75vh', overflowY: 'scroll'}}>
    Today
    <AdminTimeline slots={testSlots}/>
    </div>
  )
}

export default DayView;