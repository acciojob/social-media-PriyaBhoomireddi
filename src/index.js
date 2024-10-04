import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';  // Importing the CSS file
import App from './components/App';  // Adjusted import to reflect the new structure

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
