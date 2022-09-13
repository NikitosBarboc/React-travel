/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Welcome extends React.Component<{name: string}> {
  render() {
    const { name } = this.props;
    return <h1 key="b">{`Hello, ${name}!`}</h1>;
  }
}
export default Welcome;
