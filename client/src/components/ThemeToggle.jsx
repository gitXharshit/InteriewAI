import React, { useState } from 'react'
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle() {
  const [isDarkMode,setIsDarkMode] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
    setIsDarkMode(nextMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className='fixed bottom-6 right-6 z-[998] rounded-full bg-white dark:bg-slate-800 text-gray-700 dark:text-amber-300 shadow-lg border border-gray-200 dark:border-slate-700 hover:scale-105 transition flex items-center gap-2 px-4 py-3 font-medium'
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <FiSun size={20}/> : <FiMoon size={20}/>}
      <span>{isDarkMode ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}

export default ThemeToggle
