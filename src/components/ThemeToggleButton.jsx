import React from 'react';

function ThemeToggleButton({ isDarkMode, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md"
    >
      {isDarkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 4.5c.414 0 .75-.336.75-.75V1.5a.75.75 0 1 0-1.5 0v2.25c0 .414.336.75.75.75zM12 19.5c-.414 0-.75.336-.75.75v2.25a.75.75 0 1 0 1.5 0v-2.25c0-.414-.336-.75-.75-.75zM4.78 6.03a.75.75 0 0 0-1.06 0l-1.59 1.59a.75.75 0 0 0 1.06 1.06l1.59-1.59a.75.75 0 0 0 0-1.06zM18.31 20.56a.75.75 0 1 0 1.06 1.06l1.59-1.59a.75.75 0 0 0-1.06-1.06l-1.59 1.59zM4.5 12c0-.414-.336-.75-.75-.75H1.5a.75.75 0 1 0 0 1.5h2.25c.414 0 .75-.336.75-.75zM19.5 12c0 .414.336.75.75.75h2.25a.75.75 0 1 0 0-1.5h-2.25c-.414 0-.75.336-.75.75zM4.78 19.47a.75.75 0 0 0 0 1.06l1.59 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.59a.75.75 0 0 0-1.06 0zM18.31 3.44a.75.75 0 0 0-1.06-1.06l-1.59 1.59a.75.75 0 1 0 1.06 1.06l1.59-1.59zM12 7.5A4.5 4.5 0 1 1 7.5 12 4.504 4.504 0 0 1 12 7.5z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M21.75 12.72a.75.75 0 0 0-1.043-.506 7.97 7.97 0 0 1-10.423-8.12.75.75 0 0 0-1.164-.715A9.966 9.966 0 1 0 19.573 19.88a9.975 9.975 0 0 0 2.543-5.952.75.75 0 0 0-.366-.727zM13.44 19.86A8.462 8.462 0 0 1 7.964 4.016a9.47 9.47 0 0 0 6.6 11.62 9.448 9.448 0 0 0 4.507.595 8.455 8.455 0 0 1-5.63 3.628z" />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggleButton;
