import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';

export default ({
  store,
  present,
  state,
}) => (
<Provider store={store}>
  <div>
    <App present={present} />
    <DevTools />
  </div>
</Provider>
)
