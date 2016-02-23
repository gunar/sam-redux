import React from 'react';
import { render } from 'react-dom';

import model from './model'

import Root from './containers/Root';

render(
  <Root state={model.store.getState()} store={model.store} present={model.present} />,
  document.getElementById('root')
);
