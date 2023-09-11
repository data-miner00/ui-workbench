import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Showcase1 from "./views/Showcase1";
import Showcase2 from "./views/Showcase2";
import Index from "./views";
import "./App.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
