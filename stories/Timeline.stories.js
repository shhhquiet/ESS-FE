import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Timeline from '../components/Timeline';

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

export const actions = {
  onClear: action('onClear'),
  onAvailible: action('onAvailible'),
  onBooked: action('onBooked'),
}

storiesOf('Timeline', module)
  .add('default', () => <Timeline day={'Tuesday'} slots={defaultSlots} {...actions} />)
  .add('withBookedSlots', () => <Timeline day={'Tuesday'} slots={withBookedSlots} {...actions} />)
  .add('withAvailibleSlots', () => <Timeline day={'Tuesday'} slots={withAvailibleSlots} {...actions} />)
  .add('withMixedSlots', () => <Timeline day={'Tuesday'} slots={withMixedSlots} {...actions} />);
