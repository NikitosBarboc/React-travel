import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './06_handeling-events/events';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Button text="click me" className="button" event={(e) => { console.log(e); }} />;
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
