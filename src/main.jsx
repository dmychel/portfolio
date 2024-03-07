import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Terminal from "./Terminal";
import NormieView from "./NormieView";
import Menu from "./components/terminal/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "terminal",
    element: <Terminal />,
  },
  {
    path: "normie",
    element: <NormieView />,
  },
  {
    path: "menu",
    element: <Menu/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
