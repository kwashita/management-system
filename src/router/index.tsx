import React, { lazy } from "react";

import { Navigate } from "react-router-dom";

const About = lazy(() => import("../views/About"));
const Home = lazy(() => import("../views/Home"));

const withLoadingComponent = (child: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{child}</React.Suspense>
);
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: withLoadingComponent(<About />),
  },
  {
    path: "/about",
    element: withLoadingComponent(<Home />),
  },
];

export default routes;
