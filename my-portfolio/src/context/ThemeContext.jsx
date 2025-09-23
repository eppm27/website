import { createContext, useContext, useEffect, useMemo } from "react";

const ThemeContext = createContext({ theme: "dark" });

export const ThemeProvider = ({ children }) => {
  const theme = "dark";

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.dataset.theme = theme;
  }, []);

  const value = useMemo(
    () => ({
      theme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
