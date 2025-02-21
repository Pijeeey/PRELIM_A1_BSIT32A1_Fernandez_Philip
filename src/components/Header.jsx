import { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header
        className="
      flex justify-between 
      text-black
      py-3 px-5
      md:px-32 bg-gradient-to-r from-yellow-500 to-blue-300
      drop-shadow-md"
      >
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <a href="#">
            <img src={logo} className="w-16 hover:scale-105 transition-all" />
          </a>
          <p className="text-3xl py-3 px-2 font-serif">Lyceum of Alabang</p>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-6 font-semibold text-base">
          <li className="p-3 hover:bg-yellow-100 hover:text-black rounded-md transition-all cursor-pointer">
            <NavLink to="/home" className="nav-link">
              <i className="bx-fw bx bx-home bx-sm bx-tada-hover"></i> HOME
            </NavLink>
          </li>

          <li className="p-3 hover:bg-yellow-100 hover:text-black rounded-md transition-all cursor-pointer">
            <NavLink to="/about" className="nav-link">
              <i className="bx-fw bx bx-book-open bx-sm bx-tada-hover"></i> ABOUT
            </NavLink>
          </li>

          <li className="p-3 hover:bg-yellow-100 hover:text-black rounded-md transition-all cursor-pointer">
            <NavLink to="/contact" className="nav-link">
              <i className="bx-fw bx bx-phone bx-sm bx-tada-hover"></i> CONTACT US
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer py-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        {/* Mobile Menu */}
        <div
          className={`absolute xl:hidden top-20 left-0 w-full bg-gradient-to-r from-yellow-500 to-blue-300 drop-shadow-md flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <ul className="w-full">
            <li className="list-none w-full text-center p-4 hover:bg-green-500 hover:text-white transition-all cursor-pointer">
              <NavLink to="/home" onClick={() => setIsMenuOpen(false)}>
                <i className="bx-fw bx bx-home bx-sm bx-tada-hover"></i> HOME
              </NavLink>
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-green-500 hover:text-white transition-all cursor-pointer">
              <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                <i className="bx-fw bx bx-book-open bx-sm bx-tada-hover"></i> ABOUT
              </NavLink>
            </li>
            <li className="list-none w-full text-center p-4 hover:bg-green-500 hover:text-white transition-all cursor-pointer">
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                <i className="bx-fw bx bx-phone bx-sm bx-tada-hover"></i> CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
