/* eslint-disable react/require-default-props */
import React from 'react';
import ModalWindow from './Modal/ModalWindow';

type buttonProps = {
  cls: string,
  text: string,
  modalWindowInfo?: {
    text: string,
    title: string
  },
}
type buttonState = {
  isActive: boolean
}

class Button extends React.Component<buttonProps, buttonState> {
  constructor(props: buttonProps) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(boolean: boolean) {
    if (boolean) {
      this.setState(() => ({
        isActive: false,
      }));
    }
  }

  render() {
    const { cls, text, modalWindowInfo } = this.props;
    const { isActive } = this.state;
    return (
      <>
        <button
          type="button"
          onClick={() => {
            this.setState(() => ({
              isActive: true,
            }));
          }}
          className={cls}
        >
          {text}
        </button>
        {isActive && modalWindowInfo && (
        <ModalWindow
          handleClick={this.handleClick}
          title={modalWindowInfo.title}
          text={modalWindowInfo.text}
        />
        )}
      </>
    );
  }
}

export default Button;
