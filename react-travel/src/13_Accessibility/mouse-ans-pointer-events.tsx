import React from 'react';

interface IOuterClickExampleState {
  isOpen: boolean
}

class OuterClickExample extends React.Component<{}, IOuterClickExampleState> {
  timeOutId: number | null = null;

  constructor(props: {}) {
    super(props);

    this.state = { isOpen: false };

    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onBlurHandler() {
    this.timeOutId = window.setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    });
  }

  onFocusHandler() {
    window.clearTimeout(this.timeOutId as number);
  }

  onClickHandler() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div
        onBlur={this.onBlurHandler}
        onFocus={this.onFocusHandler}
      >
        <button
          type="button"
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          Select an option
        </button>
        {isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

export default OuterClickExample;
