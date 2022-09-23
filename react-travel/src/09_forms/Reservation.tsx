/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from 'react';

type reservationProps = {
  isGoing: boolean,
  numberOfGuests: number,
  [propName: string]: string | boolean | number
}

class Reservation extends React.Component<{}, reservationProps> {
  constructor(props: reservationProps) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { isGoing, numberOfGuests } = this.state;
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default Reservation;
