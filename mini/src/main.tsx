import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router";
// import { router } from "./data-routes";
import RouteScreen from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteScreen />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);