import { render } from "react-dom";
import { App } from "./app/app";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// 12 video
