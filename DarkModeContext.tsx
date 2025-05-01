import React, { createContext, useContext, useState, ReactNode } from 'react';

type DarkModeContextType = {
  isNightMode: boolean;
  toggleDarkMode: () => void;
};

// Create the context
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Hook to use dark mode context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

// Explicitly type the props for the provider
type DarkModeProviderProps = {
  children: ReactNode;
};

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleDarkMode = () => setIsNightMode(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ isNightMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
