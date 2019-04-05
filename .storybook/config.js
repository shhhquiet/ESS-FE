import { configure, addDecorator } from '@storybook/react';

//This stuf isn't working --
import * as React from 'react';
import GlobalStyle from '../utils/GlobalStyle';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = cb => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);

addDecorator(withGlobal);

configure(loadStories, module);
