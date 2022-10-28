import React from "react";
import { Button } from "antd";
import { UpCircleFilled } from "@ant-design/icons";
import { Outlet, Link, useRoutes } from "react-router-dom";
import router from "./router";

export default function App() {
  const outlet = useRoutes(router);
  return (
    <div className="App">
      {/* <Link to={"/home"}>Home</Link> |<Link to={"/about"}>About</Link> */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  );
}
