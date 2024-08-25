import React from 'react';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <div className="transaction-history-container w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
        Transaction History
      </h2>
      <table className="text-center transaction-history w-full">
        <thead>
          <tr className="bg-blue-200">
            <th className="text-center p-2 text-left">Type</th>
            <th className="text-center p-2 text-left">Amount</th>
            <th className="text-center p-2 text-left">Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className="hover:bg-blue-100">
              <td className="p-2">{type}</td>
              <td className="p-2">{amount}</td>
              <td className="p-2">{currency}</td>
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
