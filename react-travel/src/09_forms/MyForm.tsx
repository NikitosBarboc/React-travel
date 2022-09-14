/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line max-classes-per-file
import React, { ChangeEvent, ChangeEventHandler } from 'react';

type selectFood = {
  food: string,
  handleChange: ChangeEventHandler<HTMLSelectElement>
}

class SelectFood extends React.Component<selectFood, selectFood> {
  constructor(props: selectFood) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const { handleChange } = this.props;
    handleChange(e);
  }

  render() {
    const { food, handleChange } = this.props;
    return (
      <>
        <label>
          What do you want?
          <select value={food} onChange={handleChange}>
            <option value="cheese">cheese</option>
            <option value="potato">potato</option>
            <option value="tea">tea</option>
            <option value="milk">milk</option>
          </select>
        </label>
        <hr />
      </>
    );
  }
}

type notesInputProps = {
  note: string,
  handleChange: ChangeEventHandler<HTMLInputElement>
}

function NotesInput(props: notesInputProps) {
  const { note, handleChange } = props;
  return (
    <>
      <label>
        Any notes for cook?
        <input type="text" value={note} onChange={handleChange} />
      </label>
      <hr />
    </>
  );
}

type choosePayment = {
  payment: string,
  handleChange: ChangeEventHandler<HTMLInputElement>
}

function ChoosePayment(props: choosePayment) {
  const { payment, handleChange } = props;
  return (
    <>
      <label>
        Payment at the restaurant
        <input type="checkbox" checked={payment === 'on'} onChange={handleChange} />
      </label>
      <hr />
    </>
  );
}

type orderProps = {
  chosenFood: string,
  paymentInRestaurant: string,
  note: string
}

class Order extends React.Component<{}, orderProps> {
  constructor(props: orderProps) {
    super(props);
    this.state = {
      chosenFood: 'cheese',
      paymentInRestaurant: 'on',
      note: '',
    };
    this.onFoodChange = this.onFoodChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
    this.onPaymentSelect = this.onPaymentSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFoodChange(event: ChangeEvent) {
    const target = event.target as HTMLSelectElement;
    const newFood = target.value;
    this.setState({ chosenFood: newFood });
  }

  onNotesChange(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const newNote = target.value;
    this.setState({ note: newNote });
  }

  onPaymentSelect(event: ChangeEvent) {
    const target = event.target as HTMLInputElement;
    const newNote = target.value === 'on' ? 'off' : 'on';
    target.value = target.value === 'on' ? 'off' : 'on';
    this.setState({ paymentInRestaurant: newNote });
  }

  onSubmit() {
    const { chosenFood, paymentInRestaurant, note } = this.state;
    const payment = paymentInRestaurant === 'on' ? 'in restaurant' : 'online';
    console.log(`Your order is ${chosenFood} with note: ${note} and you chose to pay ${payment}`);
  }

  render() {
    const { chosenFood, paymentInRestaurant, note } = this.state;
    return (
      <div>
        <hr />
        <SelectFood food={chosenFood} handleChange={this.onFoodChange} />
        <NotesInput note={note} handleChange={this.onNotesChange} />
        <ChoosePayment payment={paymentInRestaurant} handleChange={this.onPaymentSelect} />
        <input type="submit" value="Submit" onClick={this.onSubmit} />
      </div>
    );
  }
}
export default Order;
