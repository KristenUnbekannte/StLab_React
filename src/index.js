import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterContainer from './containers/CounterContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterContainer />, document.getElementById('root'));
registerServiceWorker();
