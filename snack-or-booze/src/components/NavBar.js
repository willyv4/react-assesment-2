import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navLinks = [
    {
      to: "/snacks",
      text: "Snacks",
    },
    {
      to: "/drinks",
      text: "Drinks",
    },
    {
      to: "/additem",
      text: "Add Snack or Drink",
    },
  ];

  return (
    <div className="absolute z-10 top-0 w-full flex flex-wrap items-center justify-between p-4 bg-zinc-100 shadow-lg">
      <NavLink to="/" className="text-2xl font-bold text-sky-950">
        Snack or Booze
      </NavLink>

      <div>
        {navLinks.map((link, index) => (
          <NavLink
            to={link.to}
            key={index}
            className="ml-4 text-lg font-medium text-zinc-200 hover:text-zinc-300 bg-sky-950 p-2 px-4 rounded-full"
            activeclassname="text-blue-500"
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
