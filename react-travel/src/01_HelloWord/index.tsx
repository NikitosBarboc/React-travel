import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const link = <a href="https://bit.ly/CRA-vitals">CRA</a>;
const element = (
  <div>
    <h1>HELLO</h1>
    <h2>Word</h2>
    {link}
  </div>
);
root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
