import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-opacity-30" : "bg-transparent"
      }`}
    >
      <div className='flex justify-between items-center max-w-7xl mx-auto p-4'>
        <div className='font-bold text-2xl text-indigo-600'>
          <h1>Logo</h1>
        </div>
        <div>
          <nav className='flex text-lg gap-6'>
            <Link
              to='/'
              className='hover:text-indigo-600 transition-colors duration-300'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='hover:text-indigo-600 transition-colors duration-300'
            >
              About
            </Link>
            <Link
              to='/projects'
              className='hover:text-indigo-600 transition-colors duration-300'
            >
              Projects
            </Link>
            <Link
              to='/contact'
              className='hover:text-indigo-600 transition-colors duration-300'
            >
              Contact
            </Link>
            <Link
              to='/blog'
              className='hover:text-indigo-600 transition-colors duration-300'
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className='text-lg font-bold'>
          <button
            onClick={toggleTheme}
            className='p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300'
          >
            {theme === "light" ? (
              <FaMoon className='text-indigo-600' />
            ) : (
              <FaSun className='text-yellow-500' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
