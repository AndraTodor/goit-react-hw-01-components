import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './friendList.css';

function FriendList({ friends }) {
  return (
    <ul className="friend-list hover:bg-blue-100 w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
