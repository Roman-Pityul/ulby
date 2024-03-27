import { useState } from "react";

import "./styles/index.scss";

import { Link } from "react-router-dom";
import { AppRouter } from "./providers";

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
      <Link to={"/about"}>About</Link>
      <Link to={"/"}>Main</Link>
      <AppRouter />
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};
