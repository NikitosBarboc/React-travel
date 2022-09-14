/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent } from 'react';

type flavorFormProps = {
  value: string
}

class FlavorForm extends React.Component<{}, flavorFormProps> {
  constructor(props: flavorFormProps) {
    super(props);
    this.state = {
      value: 'coconut',
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
    alert(`Your favorite flavor is: ${value}`);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" onSubmit={this.handleSubmit} value="Submit" />
        {/* <textarea value={value} onChange={this.handleChange} /> */}
      </form>
    );
  }
}

export default FlavorForm;
