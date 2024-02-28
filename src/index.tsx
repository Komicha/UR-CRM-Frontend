import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
=======
import GlobalStyles from "theme/globalStyle";
>>>>>>> 309b9e37f0e7c204918edd302f30d3b2559557a7
import { Normalize } from "styled-normalize";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Normalize />
<<<<<<< HEAD
=======
    <GlobalStyles />
>>>>>>> 309b9e37f0e7c204918edd302f30d3b2559557a7
    <App />
  </React.StrictMode>
);
