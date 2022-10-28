import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import App from "./App";
import "@/assets/styles/global.scss";
import "antd/dist/antd.css";

import Router from "./router";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
