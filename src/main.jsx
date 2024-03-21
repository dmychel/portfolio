import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Terminal from "./Terminal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "terminal",
    element: <Terminal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
