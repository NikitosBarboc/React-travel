/* eslint-disable react/prefer-stateless-function */
import React, { MouseEventHandler } from 'react';

type classicButton = {
  text: string,
  className: string,
  event: MouseEventHandler<HTMLButtonElement>
}

class Button extends React.Component<classicButton> {
  render(): React.ReactNode {
    const { className, text, event } = this.props;
    return (
      <button className={className} type="button" onClick={(e) => { event(e); }}>
        {text}
      </button>
    );
  }
}
export default Button;
