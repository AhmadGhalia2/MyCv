import { createContext, useState, useContext } from "react";

// Create a context
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("sv"); // Default: Swedish

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "sv" ? "en" : "sv"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
