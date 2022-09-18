import React from 'react';

interface IInput {
  id: string
}

function Input(props: IInput) {
  const { id } = props;
  return (
    <label htmlFor={id}>
      Name:
      <input type="text" name="name" id={id} />
    </label>
  );
}

export default Input;
