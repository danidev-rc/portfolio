import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FiHome } from "react-icons/fi";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='navbar'
    >
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled}`}
      >
        <div className='flex justify-around items-center max-w-7xl mx-auto p-4'>
          <div>
            <nav className='flex text-lg gap-6 items-center font-semibold bg-slate-700 px-4 rounded-2xl '>
              <Link
                to='/'
                className={`${
                  theme === "light"
                    ? "text-white hover:text-blue-600"
                    : "text-white hover:text-indigo-600"
                } transition-colors duration-300`}
              >
                <button
                  className='flex items-center'
                  onClick={() => scrollToSection("home")}
                >
                  <FiHome className='text-xl hover:transition-transform hover:scale-110 transform origin-center transition-transform duration-500 ease-in-out' />
                </button>
              </Link>
              <Link
                to='/'
                className={`${
                  theme === "light"
                    ? "text-white hover:text-blue-600"
                    : "text-white hover:text-indigo-600"
                } transition-colors duration-300`}
              >
                <button onClick={() => scrollToSection("experience")}>
                  Experiencia
                </button>
              </Link>
              <Link
                to='/'
                className={`${
                  theme === "light"
                    ? "text-white hover:text-blue-600"
                    : "text-white hover:text-indigo-600"
                } transition-colors duration-300`}
              >
                <button onClick={() => scrollToSection("projects")}>
                  Projects
                </button>
              </Link>

              <Link
                to='/blog'
                className={`${
                  theme === "light"
                    ? "text-white hover:text-blue-600"
                    : "text-white hover:text-indigo-600"
                } transition-colors duration-300`}
              >
                <button>Blog</button>
              </Link>
              <div className='text-lg font-bold'>
                <button
                  onClick={toggleTheme}
                  className='p-2 rounded-full hover:transition-transform hover:scale-110 transform origin-center transition-transform duration-500 ease-in-out'
                >
                  {theme === "light" ? (
                    <IoSunnyOutline className='text-white text-xl' />
                  ) : (
                    <IoMoonOutline className='text-white text-xl' />
                  )}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </motion.nav>
  );
}
