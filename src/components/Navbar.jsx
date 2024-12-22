import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setisMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Features", path: "features" },
    { link: "Use Case", path: "usecase" },
    { link: "Pricing", path: "pricing" },
    { link: "Blog", path: "blog" },
  ];

  return (
    <header className="bg-[#0D1849] fixed top-0 left-0 right-0 text-white z-50">
      <nav
        className={`py-4 lg:px-8 px-4 ${
          isSticky ? "duration-300 shadow-xl" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold flex items-center space-x-2">
            <img src={logo} alt="" className="w-9 h-9" />
            <span className="md:text-3xl text-2xl tracking-widest font-poppins">
              Orinix
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map(({ link, path }) => (
                <ScrollLink
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  key={path}
                  className="block text-md font-poppins text-white first:font-medium cursor-pointer hover:text-[#6A65FF] transition-colors"
                  activeClass="text-[#6A65FF]"
                  onClick={closeMenu}
                >
                  {link}
                </ScrollLink>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button className="bg-[#6A65FF] px-5 py-2 rounded-lg font-poppins text-sm font-semibold hover:bg-[#5751ff] transition-colors">
              Join The waitlist
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none p-2">
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`fixed top-[72px] left-0 right-0 h-[calc(100vh-72px)] bg-[#0D1849] transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } ease-in-out duration-300 md:hidden z-50`}
        >
          <div className="flex flex-col space-y-4 p-4 items-center">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                key={path}
                className="block text-md font-semibold font-poppins text-white text-center py-3 cursor-pointer hover:text-[#6A65FF] transition-colors"
                activeClass="text-[#6A65FF]"
                onClick={closeMenu}
              >
                {link}
              </ScrollLink>
            ))}
            <button
              className="bg-[#6A65FF] px-5 py-3 rounded-lg font-poppins text-sm font-semibold mt-4 hover:bg-[#5751ff] transition-colors"
              onClick={closeMenu}
            >
              Join The waitlist
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
