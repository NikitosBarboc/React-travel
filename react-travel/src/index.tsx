import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginControl from './07_conditional-rendering/LoginControl';
import MailBox from './07_conditional-rendering/Mail';
import Page from './07_conditional-rendering/WarningBanner';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <LoginControl isLoggedIn={false} />
    <MailBox unreadMessages={1} />
    <Page />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
