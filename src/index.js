import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ParentContainer  from './containers/ParentContainer';

ReactDOM.render(<ParentContainer  />, document.getElementById('root'));
registerServiceWorker();
