import React from 'react';
import FancyBorder from './FancyBorder';

type dialogProps = {
  title: React.ReactNode,
  message: React.ReactNode,
  children: React.ReactNode
}

function Dialog(props: dialogProps) {
  const { title, message, children } = props;
  return (
    <FancyBorder color="blue">
      <h1>
        {title}
      </h1>
      <p>
        {message}
      </p>
      {children}
    </FancyBorder>
  );
}

export default Dialog;
