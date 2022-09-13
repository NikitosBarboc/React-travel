import ReactDOM from 'react-dom/client';
import React from 'react';
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
  </React.StrictMode>,

);
