import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Explore", "Tours", "Contact"];

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={` transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="shrink-0">
              <img
                src="src/assets/logo.ico"
                height={48}
                width={48}
                alt="Ravangla Star"
              />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link}
                  to="#"
                  className="
                    relative text-gray-700 font-medium transition
                    after:absolute after:left-0 after:-bottom-1
                    after:h-0.5 after:w-0 after:bg-green-600
                    after:transition-all after:duration-300
                    hover:text-green-700 hover:after:w-full
                  "
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white px-6 py-4 shadow-inner space-y-3">
            {links.map((link) => (
              <Link
                key={link}
                to="#"
                onClick={() => setOpen(false)}
                className="
                  block rounded-md px-3 py-2 text-gray-700 font-medium
                  hover:bg-green-50 hover:text-green-700 transition
                "
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
