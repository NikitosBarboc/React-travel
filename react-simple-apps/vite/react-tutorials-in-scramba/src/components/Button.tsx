import React from 'react';

interface IButtonProps {
  cls: string;
  img: React.ReactNode,
  alt: string,
  text: string,
}

function Button(props: IButtonProps) {
  const {cls, img, text, alt} = props;
  return (
    <button type="button" className={cls}>
      <img src={img as string} alt={alt} />
      <span>{text}</span>
    </button>
  )
}

export default Button;
