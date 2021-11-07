import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Providers from "./provider";
import { Resete } from "./style/reset/reset";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <Resete />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
