/* eslint-disable no-unused-vars */
import React from 'react';
import './modalWindow.css';

type modalWindowProps = {
  title: string;
  text: string;
  handleClick: (cls: boolean) => void;
}

class ModalWindow extends React.Component<modalWindowProps> {
  constructor(props: modalWindowProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: MouseEvent) {
    const { handleClick } = this.props;
    console.log(e.target);
    const target = e.target as HTMLDivElement;
    const isModalWindow = target.classList.contains('modalWindow');
    const isCloseButton = target.classList.contains('modalWindow__close');
    const isCloseClick = isCloseButton || isModalWindow;
    handleClick(isCloseClick);
  }

  render() {
    const { title, text } = this.props;
    return (
      <>
        <section
          role="presentation"
          onClick={(e) => {
            const event = e as unknown as MouseEvent;
            this.handleClick(event);
          }}
          className="modalWindow"
        >
          <div className="modalWindow-wrapper">
            <div className="modalWindow__close" />
            <div className="modalWindow__title">
              {title}
            </div>
            <div className="modalWindow__text">
              {text}
            </div>
          </div>
        </section>
        <div className="shadow" />

      </>
    );
  }
}
export default ModalWindow;
