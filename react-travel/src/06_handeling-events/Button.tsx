// /* eslint-disable react/prefer-stateless-function */
import React, { MouseEventHandler } from 'react';

type classicButton = {
  text: string,
  className: string,
  event: MouseEventHandler<HTMLButtonElement>
}

function Button(props: classicButton) {
  const { className, text, event } = props;
  return (
    <button className={className} type="button" onClick={event}>
      {text}
    </button>
  );
}
export default Button;
