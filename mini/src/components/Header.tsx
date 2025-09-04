import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-4 text-black shadow">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          Coffee Shop
        </Link>
        <button
          onClick={toggleMenu}
          className="block cursor-pointer text-3xl lg:hidden"
        >
          &#8801;
        </button>
        {/* Desktop View Nav */}
        <ul className="hidden space-x-5 lg:flex">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-400"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-400"
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
        {/* Mobile View Nav */}
        <div
          className={`z-index-50 bg-op fixed inset-0 transform bg-slate-900/80 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-4 text-white">
            <Link
              to="/"
              className="cursor-pointe text-3xl"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="cursor-pointer text-3xl"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              to="/cart"
              className="cursor-pointer text-3xl"
              onClick={toggleMenu}
            >
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
