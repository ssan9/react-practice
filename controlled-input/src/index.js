import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ControlledInput from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ControlledInput />, document.getElementById('root'));
registerServiceWorker();
