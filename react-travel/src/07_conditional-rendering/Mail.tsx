import React from 'react';

type mailBoxProps = {
  unreadMessages: number
}

function MailBox(props: mailBoxProps) {
  const { unreadMessages } = props;
  return (
    <div>
      <h1>Hello</h1>
      { unreadMessages > 0
        && (
        <h2>
          {`You have ${unreadMessages} unread messages.`}
        </h2>
        )}
    </div>

  );
}

export default MailBox;
