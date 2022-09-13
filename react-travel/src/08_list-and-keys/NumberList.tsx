import React from 'react';

type numberListProps = {
  numbers: Array<number>
}
type listItemProps = {
  value: number
}
function ListItem(props: listItemProps) {
  const { value } = props;
  return (
    <li>
      {value}
    </li>
  );
}
function NumberList(props: numberListProps) {
  const { numbers } = props;
  return (
    <ul>
      {
      numbers.map((num) => <ListItem value={num} key={num.toString()} />)
      }

    </ul>
  );
}
export default NumberList;
