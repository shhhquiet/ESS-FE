import React from 'react'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AdminWeek from '../components/AdminWeek';

import {testSlots} from './AdminTimeline.stories';

const testCollection = [
    testSlots,
    testSlots,
    testSlots,
    testSlots,
    testSlots,
    testSlots,
    testSlots,
]

storiesOf('AdminWeek', module).add('default', ()=> (
    <AdminWeek slotsCollection={testCollection}/>
))