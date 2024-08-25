import React from 'react';
import PropTypes from 'prop-types';
import './statistics.css';

function Statistics({ title, stats }) {
  return (
    <section className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto hover:bg-blue-100">
      {title && (
        <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      )}
      <ul className="stat-list flex justify-between">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item bg-gray-100 dark:bg-gray-600 p-4 rounded-md text-center"
          >
            <span className="label block text-gray-600 dark:text-gray-300">
              {label}
            </span>
            <span
              className="percentage block text-lg font-bold px-2 py-1 rounded-lg"
              style={{ backgroundColor: generateRandomColor() }}
            >
              {percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function generateRandomColor() {
  const colors = [
    '#B3D1FF',
    '#99C2FF',
    '#80B2FF',
    '#66A3FF',
    '#4D94FF',
    '#3385FF',
    '#1A75FF',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
