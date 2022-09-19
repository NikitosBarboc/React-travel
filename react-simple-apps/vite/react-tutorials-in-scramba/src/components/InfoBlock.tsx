import React from 'react';

interface IInfoBlockProps {
  title: string;
  text: string;
  cls: string
}

export default function InfoBlock(props: IInfoBlockProps) {
  const { title, text, cls } = props;
  return (
    <section className={cls}>
      <h4>{title}</h4>
      <p>{text}</p>
    </section>
  );
}
