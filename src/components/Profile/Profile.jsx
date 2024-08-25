import React from 'react';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto hover:bg-blue-100">
      <div className="description text-center">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar rounded-full mx-auto mb-4 w-32 h-32"
        />
        <p className="name text-xl font-semibold">{username}</p>
        <p className="tag text-gray-600 dark:text-gray-300">@{tag}</p>
        <p className="location text-gray-600 dark:text-gray-300">{location}</p>
      </div>

      <ul className="stats flex justify-around mt-4">
        <li className="text-center">
          <span className="label block text-gray-600 dark:text-gray-300">
            Followers
          </span>
          <span className="quantity block text-lg font-bold">
            {stats.followers}
          </span>
        </li>
        <li className="text-center">
          <span className="label block text-gray-600 dark:text-gray-300">
            Views
          </span>
          <span className="quantity block text-lg font-bold">
            {stats.views}
          </span>
        </li>
        <li className="text-center">
          <span className="label block text-gray-600 dark:text-gray-300">
            Likes
          </span>
          <span className="quantity block text-lg font-bold">
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
