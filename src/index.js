import React from 'react';
import { render } from 'react-dom';

import model from './model'

import Root from './containers/Root';

render(
  <Root store={model.store} present={model.present} />,
  document.getElementById('root')
);
