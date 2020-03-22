import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import Provider
// import { Provider } from './components/store';

// import BrowserRouter

const app = (
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

ReactDOM.render( app, document.getElementById('root') );

serviceWorker.register();
