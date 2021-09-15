import React, { useState } from "react";
import { Social } from "./Social";
import useDarkMode from "../hook/useDarkMode";
import { Link } from "react-scroll";

const SideBar = ({ data, setTheme, colorTheme }) => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  const changeThemeHandler = (e) => {
    e.preventDefault();
    setTheme(colorTheme);
  };
  // if (loading) {
  //   return null;
  // } else {
  return (
    <>
      <div className="lg:hidden block fixed z-50 w-full">
        <button
          className="mobile-menu-button p-4 focus-within:outline-none focus-within:bg-gray-500 float-right"
          onClick={toggleSidebar}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <aside
        href="/"
        className={`lg:w-72  md:w-1/4 w-2/3 pt-5 px-4 fixed inset-y-0 mr-5  transform z-50 lg:h-screen overflow-y-auto ${
          !open ? "-translate-x-full" : ""
        }   lg:translate-x-0  transition duration-200 ease-in-out bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white`}
      >
        <div className="float-right lg:hidden block" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center text-center justify-center space-x-2 px-4">
          <div className="relative h-32 w-32 rounded-full">
            <img
              alt="lin htet swe"
              src={data?.profile.profile_image.url}
              className="rounded-full object-fill"
            />
          </div>
          <div className="mt-5">
            <p className="text-bold text-2xl font-head font-thin">
              Lin Htet Swe
            </p>
            <p className="text-sm  font-light font-body">
              A student and web-developer
            </p>
          </div>
        </div>

        <nav className="text-center font-light space-y-0 mt-6 font-body">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2.5 px-4 rounded transition duration-200 "
          >
            <a href="/home" className="navigation">
              Home
            </a>
          </Link>
          <Link
            to="personal"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2.5 px-4 rounded transition duration-200 "
          >
            <a href="/about" className="navigation">
              About Me
            </a>
          </Link>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2.5 px-4 rounded transition duration-200 "
          >
            <a href="/education" className="navigation">
              Education
            </a>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2.5 px-4 rounded transition duration-200 "
          >
            <a href="/skills" className="navigation">
              Skills
            </a>
          </Link>{" "}
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2.5 px-4 rounded transition duration-200 "
          >
            <a href="/projects" className="navigation">
              Projects
            </a>
          </Link>{" "}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2.5 px-4 rounded transition duration-200 "
          >
            <a href="/contact" className="navigation">
              Contact
            </a>
          </Link>
        </nav>
        <div className="justify-center block">
          {colorTheme === "light" ? (
            <button
              className="w-full border-2 px-2 py-2 rounded border-white text-white hover:bg-white hover:text-black text-center"
              onClick={changeThemeHandler}
            >
              {colorTheme.toUpperCase()}
            </button>
          ) : (
            <button
              className="w-full border-2 px-2 py-2 rounded border-black text-black hover:bg-black hover:text-white text-center"
              onClick={changeThemeHandler}
            >
              {colorTheme.toUpperCase()}
            </button>
          )}
        </div>
        <Social socialLinks={data?.social} />
        <small className="text-center font-thin">
          Copyright &copy;2021 Lin Htet Swe. All Rights reserved
        </small>
      </aside>
    </>
  );
};
// };
export default SideBar;
