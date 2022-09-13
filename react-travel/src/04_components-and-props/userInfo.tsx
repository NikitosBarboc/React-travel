import React from 'react';
import Avatar from './avatar';
import { author } from './commentTypes';

type userInfoProps = {
  user: author
}
function UserInfo(props: userInfoProps) {
  const { user } = props;
  return (
    <div className="UserInfo">
      <Avatar user={user} />
      <div className="UserInfo-name">
        {user.name}
      </div>
    </div>
  );
}
export default UserInfo;
