import React, { lazy } from "react";

import { Navigate } from "react-router-dom";

const Home = lazy(() => import("../views/Home"));
const About = lazy(() => import("../views/About"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const Page301 = lazy(() => import("../views/Page301"));

// import Home from "../views/Home";
const withLoadingComponent = (child: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{child}</React.Suspense>
);
const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
      {
        path: "/page3/page301",
        element: withLoadingComponent(<Page301 />),
      },
    ],
  },
  {
    path: "/about",
    element: withLoadingComponent(<About />),
  },
  {
    path: "*",
    element: <Navigate to="/page1" />,
  },
];

export default routes;
