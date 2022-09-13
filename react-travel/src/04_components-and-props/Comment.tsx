import React from 'react';
import comment from './commentTypes';
import UserInfo from './userInfo';

function Comment(props: comment) {
  const { author, date, text } = props;
  return (
    <div className="Comment">
      <UserInfo user={author} />
      <div className="Comment-text">
        {text}
      </div>
      <div className="Comment-date">
        {date.toString()}
      </div>
    </div>
  );
}
export default Comment;
