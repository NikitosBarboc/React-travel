import React from 'react';
import Paragraph from '../Paragraph';

type cardProps = {
  number: string,
  title: string,
  text: string,
}

function Card(props: cardProps) {
  const {
    number, title, text,
  } = props;
  return (
    <div className={`card ${title}`} key={title}>
      <div className="card__main-content">
        <div className="card-title">
          {title}
          <span>
            {number}
          </span>
        </div>
        <div className="card-text">
          <Paragraph
            text={text}
            cls="card-paragraph"
          />
        </div>
      </div>
      <div className={`card-img ${title}`} />
    </div>
  );
}

export default Card;
