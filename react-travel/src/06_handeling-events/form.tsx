import React, { FormEvent } from 'react';

type formProps = {
  message: string,
}

function Form(props: formProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Thank you for your time!');
  }
  const { message } = props;
  return (
    <form action="submit" className="form" onSubmit={(e) => { handleSubmit(e); }}>
      <button type="submit">{message}</button>
    </form>
  );
}
export default Form;
