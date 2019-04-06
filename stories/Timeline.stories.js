import React from 'react';
import { storiesOf } from '@storybook/react';

import Timeline from '../components/Timeline';
import GlobalStyle from '../utils/GlobalStyle';

export const defaultSlots = new Array(18).fill('clear');

export const withBookedSlots = [...defaultSlots.slice(0, 17), 'booked'];
export const withAvailibleSlots = [...defaultSlots.slice(0, 16), 'availible', 'availible'];
export const withMixedSlots = [
  'clear',
  'booked',
  'booked',
  'clear',
  'availible',
  'clear',
  'booked',
  'availible',
  'availible',
  'booked',
  'clear',
  'availible',
  'availible',
  'booked',
  'clear',
  'availible',
  'booked',
  'clear'
];

storiesOf('Timeline', module)
  .add('default', () => <Timeline slots={defaultSlots} />)
  .add('withBookedSlots', () => <Timeline slots={withBookedSlots} />)
  .add('withAvailibleSlots', () => <Timeline slots={withAvailibleSlots} />)
  .add('withMixedSlots', () => <Timeline slots={withMixedSlots} />);
