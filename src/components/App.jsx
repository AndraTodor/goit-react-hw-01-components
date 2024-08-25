import React, { useState, useEffect } from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen transition-all duration-300">
      <div className="flex justify-between items-center p-4">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 px-4 rounded transition-all duration-300"
        >
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <div className="space-y-6 p-4">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList title="Friends" friends={friends} />
        <TransactionHistory title="Transaction History" items={transactions} />
      </div>
    </div>
  );
}

// export default App;

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <div
//       className={`${
//         isDarkMode ? 'dark' : ''
//       } min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300`}
//     >
//       <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <Statistics title="Upload stats" stats={data} />
//       <FriendList friends={friends} />
//       <TransactionHistory items={transactions} />
//     </div>
//   );
// }

export default App;
