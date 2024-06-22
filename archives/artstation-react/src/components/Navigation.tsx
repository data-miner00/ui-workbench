import React, { useState } from "react";
import { Link } from "react-router-dom";

type NavLink = {
  url: string;
  title: string;
};

function Navigation() {
  const [links, setLinks] = useState<NavLink[]>([
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/svelte-interop",
      title: "Svelte Interop",
    },
    {
      url: "/stagger",
      title: "Stagger",
    },
  ]);

  return (
    <nav>
      <ul className="flex gap-5 items-center">
        {links.map((link) => (
          <li>
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
