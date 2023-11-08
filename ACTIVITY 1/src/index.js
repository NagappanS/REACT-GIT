import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import Hel from './Components/Hel';
import './Asus/css/styl.css';
//import Luci from './Components/Luci';
//import './Asus/css/luc.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hel/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
