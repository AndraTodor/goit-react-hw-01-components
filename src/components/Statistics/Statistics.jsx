import React from 'react';
import PropTypes from 'prop-types';
import './statistics.css';

function Statistics({ title, stats }) {
  return (
    <section className="statistics hover:bg-blue-100 bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      {title && (
        <h2 className="title text-xl font-bold mb-4 text-center">{title}</h2>
      )}
      <ul className="stat-list flex justify-around">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item bg-gray-100 rounded-lg shadow-md flex flex-col items-center w-24"
          >
            <span className="label text-gray-700 font-semibold mb-2">
              {label}
            </span>
            <span
              className="percentage text-xl font-bold text-white px-2 py-1 rounded-lg"
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
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#FF33A1',
    '#33FFF3',
    '#A133FF',
    '#FF8C33',
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
