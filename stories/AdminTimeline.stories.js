import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AdminTimeline from '../components/AdminTimeline';

export const testSlots = [
  { time: '9:00', instructor: 'Tiffani', student: 'Lil Timmy' },
  { time: '9:00', instructor: 'Lisa', student: 'Bblo' },
  { time: '2:00', instructor: 'Allison', student: 'Trevbun' }
];

storiesOf('AdminTimeline', module).add('test', () => (
  <AdminTimeline day={'Sunday'} slots={testSlots} />
));
