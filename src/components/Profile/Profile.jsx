import React from 'react';
import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile hover:bg-blue-100 bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <div className="description text-center">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar rounded-full w-32 h-32 mx-auto mb-4"
        />
        <p className="name text-xl font-bold mb-2">{username}</p>
        <p className="tag text-gray-500">@{tag}</p>
        <p className="location text-gray-700">{location}</p>
      </div>

      <ul className="stats flex justify-around mt-6">
        <li className="text-center">
          <span className="label text-gray-500">Followers</span>
          <span className="quantity block text-xl font-bold">
            {stats.followers}
          </span>
        </li>
        <li className="text-center">
          <span className="label text-gray-500">Views</span>
          <span className="quantity block text-xl font-bold">
            {stats.views}
          </span>
        </li>
        <li className="text-center">
          <span className="label text-gray-500">Likes</span>
          <span className="quantity block text-xl font-bold">
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
