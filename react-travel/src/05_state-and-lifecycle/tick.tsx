import React from 'react';
// import ReactDOM from 'react-dom/client';

type clockProps = {
  date: Date
}
class Clock extends React.Component<{}, clockProps> {
  timerID: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.timerID = 0;
  }

  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render(): React.ReactNode {
    const { date } = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          {`It is ${date.toLocaleTimeString()}`}
        </h2>
      </div>
    );
  }
}
export default Clock;
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
// root.render(<Clock />);
