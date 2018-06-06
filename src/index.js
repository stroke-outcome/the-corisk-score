import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-exp.css';
import 'spectre.css/dist/spectre-icons.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister as unregisterServiceWorker} from './registerServiceWorker';
import './index.css';

// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-41172423-3');

ReactDOM.render(<App />, document.getElementById('root'));

// registerServiceWorker();
unregisterServiceWorker();
