import React from 'react'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AdminWeek from '../components/AdminWeek';



storiesOf('AdminWeek', module).add('default', ()=> (
    <AdminWeek />
))