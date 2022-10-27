import React from "react";
import { Button } from "antd";
import { UpCircleFilled } from "@ant-design/icons";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Link to={"/home"}>Home</Link> |<Link to={"/about"}>About</Link>
      <Outlet></Outlet>
    </div>
  );
}
