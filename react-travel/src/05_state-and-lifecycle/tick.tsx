import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
type clockProps = {
  date: Date
}

function Clock(props: clockProps) {
  const { date } = props;
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>
        {`It is ${date.toLocaleTimeString()}`}
      </h2>
    </div>
  );
}
function tick(): void {
  root.render(<Clock date={new Date()} />);
}
setInterval(tick, 1000);
