import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Colorful from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Colorful />, document.getElementById('root'));
registerServiceWorker();
