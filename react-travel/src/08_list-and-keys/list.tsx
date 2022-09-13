import React from 'react';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
const list = <ul>{listItems}</ul>;
export default list;
