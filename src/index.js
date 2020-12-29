import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainContext from './context/mainContext';

ReactDOM.render(
  <MainContext>
    <App />
  </MainContext>,
  document.getElementById('root')
);
