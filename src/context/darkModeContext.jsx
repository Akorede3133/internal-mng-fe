import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();
const getFromLocalStorage = () => {
  const value = localStorage.getItem('isDarkMode');
  return value ? JSON.parse(value) : false;
}
const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getFromLocalStorage());
  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode])
  const toggleDarkMode = () => {
    setIsDarkMode((dark) => !dark);
  }
  return <DarkModeContext.Provider value={{
    isDarkMode,
    toggleDarkMode
  }}>
    { children }
  </DarkModeContext.Provider>
}

const useDarkModeContext = () => {
  return useContext(DarkModeContext);
}

export { DarkModeProvider, useDarkModeContext }