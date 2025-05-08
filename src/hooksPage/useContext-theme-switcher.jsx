import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
