import React from 'react';

type titleProps = {
  cls: string,
  text: string
}
function Title(props: titleProps) {
  const { cls, text } = props;
  return (
    <h2 className={`${cls} title`}>
      {text}
    </h2>
  );
}
export default Title;
