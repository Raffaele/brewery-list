import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ContextWrapper } from './components/ContextWrapper';

ReactDOM.render(
  <ContextWrapper>
    <React.Fragment>
      <App />
    </React.Fragment>
  </ContextWrapper>,
  document.getElementById('root')
);

reportWebVitals();
