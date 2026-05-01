import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./assets/idga-logo.png";
// import logoIcon from "../assets/logoIcoasn.png";

function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/process", name: "Process" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <div>
      {" "}
      <div className="max-w-6xl mx-auto h-16 px-4 flex  items-center justify-between">
        <div
          className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between
         w-full"
        >
          {/* LEFT: LOGO */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-12 w-16 object-contain" />
            <h3 className="text-blue-950 text-2xl font-bold hidden md:block">
              Ideas Data And Global Academy
            </h3>
          </div>

          {/* RIGHT: MENU ICON (MOBILE) */}
          <button
            className="ml-auto text-blue-950 md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* RIGHT: RESUME BUTTON */}
        </div>
        <div></div>
        {/* DESKTOP VIEW */}
        <div className="hidden md:flex justify-between items-center w-full mx-auto">
          {/* Logo */}{" "}
          <ul className="flex items-center gap-8 font-medium">
            {links.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative pb-1 transition ${
                      isActive
                        ? "text-blue-950 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-950"
                        : "text-gray-700 hover:text-blue-950"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
