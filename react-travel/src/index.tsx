import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUpDialog from './11_composition-vs-inheritance/SignUpDialog';
import './12_thinking-in-react/App';
import FilterableProductTable from './12_thinking-in-react/FilterableProductTable';
import * as data from './12_thinking-in-react/data.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <SignUpDialog />
  </React.StrictMode>,
);
root.render(<FilterableProductTable products={data} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
