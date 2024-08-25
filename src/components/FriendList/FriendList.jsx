import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './friendList.css';

function FriendList({ title, friends }) {
  return (
    <ul className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto hover:bg-blue-100">
      {title && (
        <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      )}
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
