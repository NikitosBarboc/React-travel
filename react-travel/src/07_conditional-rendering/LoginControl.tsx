import React from 'react';
import Greeting from './Greeting';

type buttonProps = {
  handler: () => void,
}

type loginControlProps = {
  isLoggedIn: boolean
}

function LoginButton(props: buttonProps) {
  const { handler } = props;
  return (
    <button type="button" onClick={handler}>
      Login
    </button>
  );
}
function LogoutButton(props: buttonProps) {
  const { handler } = props;
  return (
    <button type="button" onClick={handler}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component<loginControlProps, loginControlProps> {
  constructor(props: loginControlProps) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: props.isLoggedIn };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render(): React.ReactNode {
    const { isLoggedIn } = this.state;
    // let button!: ReactElement<any>;
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn
          ? <LogoutButton handler={this.handleLogoutClick} />
          : <LoginButton handler={this.handleLoginClick} />}
      </div>
    );
  }
}
export default LoginControl;
