import { createBrowserRouter } from "react-router-dom";
import Showcase1 from "./views/Showcase1";
import Showcase2 from "./views/Showcase2";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/showcase1",
    element: <Showcase1 />,
  },
  {
    path: "/showcase2",
    element: <Showcase2 />,
  },
]);
