/* eslint-disable no-unused-vars */
import React from 'react';
import './modalWindow.css';

type modalWindowProps = {
  title: string;
  text: string;
  handleClick: (cls: boolean) => void;
}

class ModalWindow extends React.Component<modalWindowProps> {
  ref: React.RefObject<HTMLButtonElement> = React.createRef();

  constructor(props: modalWindowProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    const ref = React.createRef();
  }

  componentDidMount(): void {
    this.ref.current?.focus();
  }

  componentWillUnmount(): void {
    this.ref = React.createRef();
  }

  handleClick(e: MouseEvent) {
    const { handleClick } = this.props;
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
            <button type="button" className="modalWindow__close" ref={this.ref}> </button>
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
