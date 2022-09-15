import React from 'react';

type buttonProps = {
  cls: string,
  text: string
}

function Button(props: buttonProps) {
  const { cls, text } = props;
  return (
    <button type="button" className={cls}>
      {text}
    </button>
  );
}

export default Button;
