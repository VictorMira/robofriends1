import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; //tachyons funciona como bootstrap para React, se instala via npm

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
