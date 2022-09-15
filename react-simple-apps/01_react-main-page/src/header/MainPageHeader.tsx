import React from 'react';
import Header from './Header';
import Logo from './Logo';
import Navigation from './Navigation';
import SignIn from './SignIn';
import './header.css';

function MainPageHeader() {
  return (
    <Header
      logo={<Logo title="Alivio" />}
      nav={(
        <Navigation>
          <li>Why Alivio</li>
          <li>Solutions</li>
          <li>Community</li>
          <li>Pricing</li>
        </Navigation>
        )}
      signIn={<SignIn />}
    />
  );
}

export default MainPageHeader;
