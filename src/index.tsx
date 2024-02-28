import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "theme/globalStyle";
import { Normalize } from "styled-normalize";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
