import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import peaks from './peaks.json';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App characters={peaks}/>, document.getElementById('root'));
registerServiceWorker();
