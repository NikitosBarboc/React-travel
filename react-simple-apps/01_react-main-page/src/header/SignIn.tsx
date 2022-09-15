import React from 'react';
import Button from '../Button';

function SignIn() {
  return (
    <div className="SignIn">
      <Button cls="signIn-button" text="SignIn" />
      <Button cls="trial-button green-button" text="Start Trial" />
    </div>
  );
}

export default SignIn;
