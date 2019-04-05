import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Test from '../components/test';

export const data = {
    thingOne: 7,
    thingTwo: "YElooooooooooo"
};

export const actions = {
    onDoAThing: action('onDoAThing')
};


storiesOf('Test', module)
    .add('default', ()=> <Test data={data} {...actions} />)

