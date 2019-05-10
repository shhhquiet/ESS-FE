import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Timeline from '../components/Timeline';

export const defaultSlots = new Array(26).fill('clear');

export const withBookedSlots = [...defaultSlots.slice(0, 25), 'booked'];
export const withAvailibleSlots = [...defaultSlots.slice(0, 24), 'availible', 'availible'];
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
export const withClientMixedSlots = [
  ...defaultSlots.slice(0, 8),
  'yourAppointment',
  'yourAppointment',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'yourAppointment',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked'
];
export const withInstructorAvailibleSlots = [
  ...defaultSlots.slice(0, 10),
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible',
  'availible'
];
export const withInstructorScheduleSlots = [
  ...defaultSlots.slice(0, 10),
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked',
  'booked'
];



export const actions = {
  onClear: action('onClear'),
  onAlertUnavailible: action('onAlertUnavailible'),
  onAvailible: action('onAvailible'),
  onBooked: action('onBooked'),
  onClientLookup: action('onClientLookup')
};

storiesOf('Timeline', module)
  .add('default', () => <Timeline day={'Tuesday'} slots={defaultSlots} {...actions} />)
  .add('withBookedSlots', () => <Timeline day={'Tuesday'} slots={withBookedSlots} {...actions} />)
  .add('withAvailibleSlots', () => (
    <Timeline day={'Tuesday'} slots={withAvailibleSlots} {...actions} />
  ))
  .add('withMixedSlots', () => <Timeline day={'Tuesday'} slots={withMixedSlots} {...actions} />)
  .add('forClient', () => (
    <Timeline timelineType={'client'} day={'Wednesay'} slots={withClientMixedSlots} {...actions} />
  ))
  .add('forInstructorAvailibility', () => (
    <Timeline
      timelineType={'instructor availibility'}
      day={'Thursday'}
      slots={withInstructorAvailibleSlots}
      {...actions}
    />
  ))
  .add('forInstructorSchedule', () => (
    <Timeline
      timelineType={'instructor schedule'}
      day={'Friday'}
      slots={withInstructorScheduleSlots}
      {...actions}
    />
  ))
  .add('laurentest', () => (
    <Timeline
      data={laurenQuery}
      timelineType={'instructor schedule'}
      day={'Friday'}
      slots={laurenTestSlots}
      {...actions}
    />
  ));
