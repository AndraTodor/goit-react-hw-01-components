import React from 'react';
import PropTypes from 'prop-types';

function TransactionHistory({ title, items }) {
  return (
    <div className="transaction-history-container w-full max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      {title && (
        <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      )}
      <table className="text-center transaction-history w-full">
        <thead>
          <tr className="bg-blue-200 dark:bg-blue-600">
            <th className="text-center p-2">Type</th>
            <th className="text-center p-2">Amount</th>
            <th className="text-center p-2">Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className="hover:bg-blue-100 dark:hover:bg-blue-500">
              <td className="p-2 text-gray-800 dark:text-gray-100">{type}</td>
              <td className="p-2 text-gray-800 dark:text-gray-100">{amount}</td>
              <td className="p-2 text-gray-800 dark:text-gray-100">
                {currency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
