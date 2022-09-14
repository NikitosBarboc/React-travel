import React, { ChangeEvent } from 'react';
import Dialog from './Dialog';

type signUpDialogState = {
  login: string
}

class SignUpDialog extends React.Component<{}, signUpDialogState> {
  constructor(props: signUpDialogState) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {
      login: '',
    };
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    const { login } = this.state;
    alert(`Welcome aboard, ${login}!`);
  }

  render(): React.ReactNode {
    const { login } = this.state;
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input
          value={login}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSignUp} type="button">
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

export default SignUpDialog;
