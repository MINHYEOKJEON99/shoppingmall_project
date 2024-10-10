import { createContext, useEffect, useState } from "react";

interface themeType {
  lightTheme: boolean;
  changeTheme: () => void;
}

export const ThemeContext = createContext<themeType>({
  lightTheme: true,
  changeTheme: () => {
    console.log("change");
  },
});

export default function ThemeStore({ children }) {
  const [lightTheme, setLightTheme] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      setLightTheme(JSON.parse(storedTheme));
    }
  }, []);

  const themeStore: themeType = {
    lightTheme,
    changeTheme: () => {
      setLightTheme(!lightTheme);
      localStorage.setItem("theme", JSON.stringify(!lightTheme));
    },
  };

  return <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>;
}
