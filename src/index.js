import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import MainContext from './context/mainContext';

ReactDOM.render(
  <MainContext>
    <App />
  </MainContext>,
  document.getElementById('root')
);
