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
          <a href="#Alivio">Why Alivio</a>
          <a href="#Solutions">Solutions</a>
          <a href="#Community">Community</a>
          <a href="#Pricing">Pricing</a>
        </Navigation>
        )}
      signIn={<SignIn />}
    />
  );
}

export default MainPageHeader;
