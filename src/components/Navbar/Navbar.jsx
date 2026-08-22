import { useState } from "react";
import { NavLink } from "react-router-dom";
import cab from '../../assets/cab.png';

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Investment Plans", path: "/investment-plans" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Team", path: "/team" },
  { name: "News", path: "/news" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-green-700 font-semibold"
      : "text-gray-700 hover:text-green-700 transition";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
                src={cab}
                alt="Cab Logo"
                className="w-[65px]"
            />

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              Community Action
            </h1>
            <p className="text-xs text-gray-500">
              In Bangladesh PLC
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={activeClass}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Login */}
          {/* <NavLink
            to="/login"
            className="rounded-lg border border-green-700 px-4 py-2 font-medium text-green-700 transition hover:bg-green-700 hover:text-white"
          >
            Login
          </NavLink> */}

          {/* Join Now */}
          <NavLink
            to="/join"
            className="rounded-lg bg-green-700 px-5 py-2 font-semibold text-white transition hover:bg-green-800"
          >
            Join Now
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={activeClass}
              >
                {item.name}
              </NavLink>
            ))}

            <div className="mt-2 flex gap-3 border-t pt-4">
              {/* <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-lg border border-green-700 px-4 py-2 text-center font-medium text-green-700"
              >
                Login
              </NavLink> */}

              <NavLink
                to="/join"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-lg bg-green-700 px-4 py-2 text-center font-semibold text-white"
              >
                Join Now
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;