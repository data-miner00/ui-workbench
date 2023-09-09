import { Link } from "react-router-dom";
import "./App.css";

type Directory = {
  path: string;
  title: string;
};

function App() {
  const directories: Directory[] = [
    {
      path: "/",
      title: "~",
    },
    {
      path: "/showcase1",
      title: "My showcase",
    },
    {
      path: "/showcase2",
      title: "New showcase",
    },
    {
      path: "/",
      title: "Placeholder",
    },
    {
      path: "/",
      title: "Placeholder",
    },
    {
      path: "/",
      title: "Placeholder",
    },
  ];
  return (
    <div className="h-screen p-20 bg-gray-100">
      <nav className="border border-solid border-gray-100">
        <p className="font-bold mb-4">Directories</p>
        <ul>
          {directories.map((dir) => (
            <li>
              <Link to={dir.path}>{dir.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
