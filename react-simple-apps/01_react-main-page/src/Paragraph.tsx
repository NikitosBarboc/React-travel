import React from 'react';

type paragraphProps = {
  cls: string,
  text: string
}

function Paragraph(props: paragraphProps) {
  const { cls, text } = props;
  return (
    <p className={`${cls} paragraph`}>
      {text}
    </p>
  );
}

export default Paragraph;
