/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent } from 'react';

type namePropsProps = {
  value: string,
}

class NameForm extends React.Component<{}, namePropsProps> {
  constructor(props: namePropsProps) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;
    this.setState({ value: target.value });
  }

  handleSubmit(event: FormEvent): void {
    const { value } = this.state;
    alert(`A name was submitted: ${value}`);
    event.preventDefault();
  }

  render(): React.ReactNode {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;
