import React from 'react';

type greetingProps = {
  isLoggedIn: boolean
}
function UserGreeting() {
  return <h1>Welcome back</h1>;
}
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}
function Greeting(props: greetingProps) {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
export default Greeting;
