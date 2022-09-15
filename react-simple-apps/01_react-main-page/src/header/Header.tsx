import React from 'react';

type headerProps = {
  logo: React.ReactNode,
  nav: React.ReactNode,
  signIn: React.ReactNode,
}

function Header(props: headerProps) {
  const { logo, nav, signIn } = props;
  return (
    <div className="header">
      <div className="header__logo">
        {logo}
      </div>
      <nav className="header__nav">
        {nav}
      </nav>
      <div className="header__signIn">
        {signIn}
      </div>
    </div>
  );
}

export default Header;
