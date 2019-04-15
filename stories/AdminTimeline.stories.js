import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AdminTimeline from '../components/AdminTimeline';

export const testSlots = [
  { time: '9:00', instructor: 'Tiffani', student: 'Lil Timmy', studentAge: 7 },
  { time: '9:00', instructor: 'Lisa', student: 'Bblo', studentAge: 24 },
  { time: '9:00', instructor: 'Allison', student: 'Suzie', studentAge: 14 },
  { time: '2:00', instructor: 'Allison', student: 'Trevbun', studentAge: 37 },
  { time: '2:30', instructor: 'Tiffani', student: 'Jimmy', studentAge: 12 }
];

storiesOf('AdminTimeline', module).add('test', () => (
  <AdminTimeline day={'Sunday'} slots={testSlots} />
));
