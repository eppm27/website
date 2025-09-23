import { createContext, useContext, useEffect } from "react";

const ThemeContext = createContext({ theme: "dark" });

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.dataset.theme = "dark";
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
