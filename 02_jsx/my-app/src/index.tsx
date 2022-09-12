import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const user = {
  name: 'Vacya',
  age: 44,
  city: 'Kiev',
  profileLink: 'https://www.instagram.com/fan.patron/',
};

const profileLink = <a href={user.profileLink}>Profile</a>;

function getUserInfo(): string {
  return `${user.name} is ${user.age} years old `;
}
root.render(
  <React.StrictMode>
    {`${getUserInfo()} and he and lives in  ${user.city}`}
    {profileLink}
    {}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
