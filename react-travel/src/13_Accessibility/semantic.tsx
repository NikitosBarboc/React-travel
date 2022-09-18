import React, { Fragment } from 'react';

interface IListItemsProps {
  item: {
    term: string,
    description: string,
    id: string,
  }
}

function ListItems(props: IListItemsProps) {
  const { item } = props;
  const { term, description } = item;
  return (
    <Fragment key="">
      <dt>{term}</dt>
      <dd>{description}</dd>
    </Fragment>
  );
}

interface IGlossaryProps {
  items: IListItemsProps[]
}

function Glossary(props: IGlossaryProps) {
  const { items } = props;
  return (
    <dl>
      {items.map((item) => (
        <ListItems item={item.item} key={item.item.id} />
      ))}
    </dl>
  );
}

export default Glossary;
