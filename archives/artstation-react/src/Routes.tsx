import React from "react";
import Home from "./pages/Home";
import SvelteInterop from "./pages/SvelteInterop";
import { createBrowserRouter } from "react-router-dom";
import Stagger from "./pages/Stagger";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/svelte-interop",
    element: <SvelteInterop />,
  },
  {
    path: "/stagger",
    element: <Stagger />,
  },
]);
