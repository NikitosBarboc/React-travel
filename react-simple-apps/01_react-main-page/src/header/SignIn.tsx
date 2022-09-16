import React from 'react';
import Button from '../Button';

function SignIn() {
  return (
    <div className="SignIn">
      <Button
        cls="signIn-button"
        text="SignIn"
        modalWindowInfo={{ text: 'lorem lorem lorem lorem lorem', title: 'Welcome' }}
      />
      <Button
        cls="trial-button green-button"
        text="Start Trial"
        modalWindowInfo={{ text: 'Your trial started', title: 'Congratulations' }}
      />
    </div>
  );
}

export default SignIn;
