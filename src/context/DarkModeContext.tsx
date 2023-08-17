import { createContext, ReactNode, useContext, useState } from "react";

const DarkModeContext = createContext<UseDarkMode | undefined>(undefined);

type DarkModeProvider = {
  children: ReactNode;
};
type UseDarkMode = { darkMode: boolean; toggleDarkMode: () => void };

function DarkModeProvider({ children }: DarkModeProvider) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
