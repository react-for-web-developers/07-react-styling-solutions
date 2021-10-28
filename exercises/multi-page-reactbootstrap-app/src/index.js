import React from 'react';
import ReactDOM from 'react-dom';
import {
  // HashRouter as Router,
  BrowserRouter as Router,
} from "react-router-dom";
import { Routes } from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);
