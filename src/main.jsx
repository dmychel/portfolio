import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import NormieView from "./NormieView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'normie',
    element: <NormieView/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
