import React from 'react';
import Dialog from './Dialog';

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!"
    >
      <h1>Hi!</h1>
    </Dialog>
  );
}

export default WelcomeDialog;
