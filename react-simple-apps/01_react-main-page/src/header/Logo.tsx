/* eslint-disable react/require-default-props */
import React from 'react';

type logoProps = {
  title: string,
  img?: {
    imgAlt: string,
    imgSrc: string,
  }
}

function Logo(props: logoProps) {
  const { title, img } = props;

  return (
    <div className="logo">
      <h1 className="logo__title title">
        {title}
      </h1>
      <div>
        {img && <img src={img.imgSrc} alt={img.imgAlt} />}
      </div>
    </div>
  );
}

export default Logo;
