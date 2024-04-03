import { render } from "react-dom";
import { App } from "./app/app";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// 12 video 12.55 
// Нужно вначале реализовать кастомный classNames, потом продолжать по видео. 
