/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

interface IDieProps {
  value: string,
  isActive: boolean,
  // eslint-disable-next-line no-unused-vars
  onClick: (id: string) => void,
  id: string
}

function Die(props: IDieProps) {
  const {
    value, isActive, onClick, id,
  } = props;
  const cls = `die ${isActive ? 'active' : ''}`;
  return (
    <div
      className={cls}
      onClick={() => onClick(id)}
    >
      {value}
    </div>
  );
}

export default Die;
