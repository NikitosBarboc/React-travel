import React from 'react';
import Greet from './Greet';
import userType from './userType';
import Welcome from './Welcome';

const userDog: userType = {
  name: 'patron',
  age: 5,
  profileUrl: 'https://www.instagram.com/patron_dsns/',
};

function App() {
  return (
    <>
      <Greet user={userDog} key="a" />
      <Welcome name="Oleg" key="b" />
      <Welcome name="Sam" key="c" />
    </>
  );
}
export default App;
