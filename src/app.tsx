import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./styles/index.scss";

import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/aboutPage/aboutPage.async";
import { MainPageAsync } from "./pages/mainPage/mainPage.async";
import { Suspense } from "react";

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};
