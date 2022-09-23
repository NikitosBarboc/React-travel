import React, { ChangeEvent } from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

type temperatureProps = {
  scale: 'c' | 'f',
  temperature: string,
  // eslint-disable-next-line no-unused-vars
  onTemperatureChange: (prop: string) => void
}

class TemperatureInput extends React.Component<temperatureProps> {
  constructor(props: temperatureProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { onTemperatureChange } = this.props;
    onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>{`Enter temperature in ${scaleNames[scale]}:`}</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
