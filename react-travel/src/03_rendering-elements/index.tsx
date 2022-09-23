import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLDivElement,
);

function timer() {
  const now = new Date();
  const timeZone = now.toString().slice(now.toString().indexOf('('));
  const element = (
    <div>
      <h1>Timer</h1>
      <h2>
        {`It is ${now.toLocaleTimeString()} in ${timeZone}`}
      </h2>
    </div>
  );
  root.render(element);
}
setInterval(timer, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
