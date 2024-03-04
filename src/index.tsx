import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import GlobalStyles from "theme/globalStyle";

import { Normalize } from "styled-normalize";

import { store } from "store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Normalize />

    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
