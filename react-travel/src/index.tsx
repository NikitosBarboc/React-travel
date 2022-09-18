import React from 'react';
import ReactDOM from 'react-dom/client';
import Input from './13_Accessibility/labeling';
import Parent from './13_Accessibility/managingFocus';
import OuterClickExample from './13_Accessibility/mouse-ans-pointer-events';
import Glossary from './13_Accessibility/semantic';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const arr = [{
  item: {
    term: '03/2022',
    description: 'description',
    id: '1',
  },
},
{
  item: {
    term: '04/2022',
    description: 'description 2',
    id: '2',
  },
},
];

root.render(
  <React.StrictMode>
    <Glossary items={arr} />
    <Input id="name-input" />
    <Parent />
    <OuterClickExample />
    <OuterClickExample />
    <OuterClickExample />
  </React.StrictMode>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
