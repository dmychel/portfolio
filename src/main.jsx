import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/normie/content/About";
import Terminal from "./Terminal";
import ProjectPage from "./components/normie/content/projects/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project",
    element: <ProjectPage />,
  },
  {
    path: "/about",
    element: <About />,
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
