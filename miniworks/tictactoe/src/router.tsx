import { createBrowserRouter } from "react-router-dom";
import Showcase1 from "./views/Showcase1";
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
]);
