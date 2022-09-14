/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent } from 'react';

type essayFormProps = {
  value: string
}

class EssayForm extends React.Component<{}, essayFormProps> {
  constructor(props: essayFormProps) {
    super(props);
    this.state = {
      value: 'Please write some text',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent) {
    const target = event.target as HTMLTextAreaElement;
    this.setState({ value: target.value });
  }

  handleSubmit(event: FormEvent) {
    const { value } = this.state;
    alert(`An essay was submitted ${value}`);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
        </label>
        <textarea value={value} onChange={this.handleChange} />
      </form>
    );
  }
}

export default EssayForm;
