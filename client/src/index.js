import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './Components/App/App.jsx';

ReactDOM.render(
  <Router>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);