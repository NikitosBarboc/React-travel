import React from 'react';
import ReactDOM from 'react-dom/client';
import NameForm from './09_forms/form';
import EssayForm from './09_forms/EssayForm';
import FlavorForm from './09_forms/FlavorForm';
// import Reservation from './09_forms/Reservation';
import MyForm from './09_forms/MyForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <NameForm />
    <EssayForm />
    <FlavorForm />
    {/* <Reservation /> */}
    <MyForm />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
