import React from 'react';
import ReactDOM from 'react-dom/client';
import NumberList from './08_list-and-keys/NumberList';
import Blog from './08_list-and-keys/Blog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];
root.render(
  <React.StrictMode>
    <NumberList numbers={[1, 2, 3, 4, 5, 6, 7, 8]} />
    <Blog posts={posts} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
