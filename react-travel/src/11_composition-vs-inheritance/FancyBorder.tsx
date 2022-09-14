import React, { ReactNode } from 'react';

type fancyBorderProps = {
  color: string,
  children: ReactNode
}

function FancyBorder(props: fancyBorderProps) {
  const { color, children } = props;
  return (
    <div className={`fancyBorder fancyBorder-${color}`}>
      {children}
    </div>
  );
}

export default FancyBorder;
