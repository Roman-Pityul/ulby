import { useState } from "react";

import "./styles/index.scss";

import { AppRouter } from "./providers";
import { Navbar } from "../widgets/navbar";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};
