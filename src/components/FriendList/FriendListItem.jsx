import React from 'react';
import PropTypes from 'prop-types';

// function FriendListItem({ avatar, name, isOnline }) {
//   return (
//     <li className="item w-full flex items-center justify-center p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
//       <span
//         className={`status w-4 h-4 rounded-full mr-4 ${
//           isOnline ? 'bg-green-500' : 'bg-red-500'
//         }`}
//       ></span>
//       <img
//         className="avatar w-12 h-12 rounded-full mr-4"
//         src={avatar}
//         alt={`${name} avatar`}
//       />
//       <p className="name text-gray-800 font-semibold">{name}</p>
//     </li>
//   );
// }

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item flex items-center justify-center p-4 mb-2 rounded-md bg-gray-100 dark:bg-gray-600">
      <span
        className={`status w-4 h-4 rounded-full mr-4 ${
          isOnline ? 'bg-green-500' : 'bg-red-500'
        }`}
      ></span>
      <img
        className="avatar rounded-full w-10 h-10 mr-4"
        src={avatar}
        alt={`${name} avatar`}
      />
      <p className="name text-lg font-semibold">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
