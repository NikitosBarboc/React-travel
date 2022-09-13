import React from 'react';
import { author } from './commentTypes';

type AvatarProps = {
  user: author
}
function Avatar(props: AvatarProps) {
  const { user } = props;
  return (
    <img
      className="Avatar"
      src={user.avatarUrl}
      alt={user.name}
    />
  );
}
export default Avatar;
