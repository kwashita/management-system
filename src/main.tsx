import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import App from "./App";
import "@/assets/styles/global.scss";
import "antd/dist/antd.css";

import Router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);