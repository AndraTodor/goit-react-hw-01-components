import React from 'react';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <div className="hover:bg-blue-100 w-full max-w-4xl mx-auto p-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-3 px-6 text-center">Type</th>
            <th className="py-3 px-6 text-center">Amount</th>
            <th className="py-3 px-6 text-center">Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className="hover:bg-gray-100">
              <td className="py-3 px-6 border-t border-gray-200 text-center">
                {type}
              </td>
              <td className="py-3 px-6 border-t border-gray-200 text-center">
                {amount}
              </td>
              <td className="py-3 px-6 border-t border-gray-200 text-center">
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
