import React from 'react';
import { storiesOf } from '@storybook/react';


import Timeline from '../components/Timeline';

export const defaultSlots = new Array(12).fill("clear");

storiesOf('Timeline', module)
    .add('default', ()=> <Timeline slots={defaultSlots} />);