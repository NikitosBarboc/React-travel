import React from 'react';
import userType from './userType';

function Greet(props: {user: userType}) {
  const { user } = props;
  const { name } = user;
  return <h1 key="a">{`Hello, ${name}!`}</h1>;
}
export default Greet;
