import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};