import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AdminTimeline from '../components/AdminTimeline';

export const testSlots = [
  { time: '9:00', instructor: 'Tiffani', student: 'Lil Timmy', studentAge: 7, notes: null },
  { time: '9:30', instructor: 'Lori', student: 'jimjam', studentAge: 7, notes: null },
  {
    time: '9:00',
    instructor: 'Lisa',
    student: 'Bblo',
    studentAge: 24,
    notes: ['Nerd', 'Weird Arms', 'Freakishly Long Hair']
  },
  { time: '9:00', instructor: 'Allison', student: 'Suzie', studentAge: 14, notes: null },
  {
    time: '2:00',
    instructor: 'Allison',
    student: 'Trevbun',
    studentAge: 37,
    notes: ['Handsome af', 'cool dude']
  },
  { time: '2:30', instructor: 'Tiffani', student: 'Jimmy', studentAge: 12, notes: null }
];

storiesOf('AdminTimeline', module).add('test', () => (
  <AdminTimeline day={'Sunday'} slots={testSlots} />
));
