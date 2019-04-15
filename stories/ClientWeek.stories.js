import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ClientWeek from '../components/ClientWeek';

import {
  withAvailibleSlots,
  withBookedSlots,
  withMixedSlots,
  withClientMixedSlots,
  withInstructorAvailibleSlots,
  withInstructorScheduleSlots,
  actions
} from './Timeline.stories';

const slotsCollection = [
  withAvailibleSlots,
  withBookedSlots,
  withMixedSlots,
  withClientMixedSlots,
  withInstructorAvailibleSlots,
  withInstructorScheduleSlots,
  withAvailibleSlots
];

storiesOf('ClientWeek', module).add('default', () => (
  <ClientWeek slotsCollection={[...slotsCollection]} {...actions} />
));
