import React from 'react';

interface customTextInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

function CustomTextInput(props: customTextInputProps) {
  const { inputRef } = props;
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  inputElement!: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount(): void {
    this.inputElement.current?.focus();
  }

  render() {
    return (
      <CustomTextInput inputRef={this.inputElement} />
    );
  }
}
export default Parent;
