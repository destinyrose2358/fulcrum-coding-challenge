import React from 'react';
import ReactDOM from 'react-dom';
import './stylings/index.css';
import * as serviceWorker from './serviceWorker';
import Root from './components/root';

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
