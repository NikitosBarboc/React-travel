import React from 'react';

type navigationProps = {
  children: React.ReactNode
}

function Navigation(props: navigationProps) {
  const { children } = props;
  return (
    <ul className="navigation">
      {children}
    </ul>
  );
}

export default Navigation;
