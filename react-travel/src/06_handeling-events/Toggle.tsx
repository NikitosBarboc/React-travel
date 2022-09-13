import React from 'react';

type toggleProps = {
  isToggleON: boolean
}
class Toggle extends React.Component<{}, toggleProps> {
  constructor(props: toggleProps) {
    super(props);
    this.state = { isToggleON: true };
    // this.handleClick = this.handleClick.bind(this, 'id');
  }

  handleClick(id: string) {
    this.setState((prevState) => ({
      isToggleON: !prevState.isToggleON,
    }));
    console.log(id);
  }

  render(): React.ReactNode {
    const { isToggleON } = this.state;
    return (
      <button type="button" onClick={this.handleClick.bind(this, 'id')}>
        {isToggleON ? 'ON' : 'OFF'}
      </button>
    );
  }
}
export default Toggle;
