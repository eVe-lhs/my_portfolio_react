import React, { useState } from "react";
import { Social } from "./Social";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.3,
    },
  },
};

const navChildVariant = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const LinkDiv = ({ to, children }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={(distance) => {
        return Math.abs(distance) * 0.9;
      }}
      className="block py-2.5 px-4 rounded transition duration-200 "
    >
      {children}
    </Link>
  );
};

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
      <div className="lg:hidden block fixed z-50 w-screen">
        <div
          className="m-5 float-right w-5 h-5 flex flex-col justify-between relative"
          onClick={toggleSidebar}
        >
          <motion.div
            initial={false}
            animate={
              !open
                ? {
                    translateY: [8, 8, 0],
                    rotate: [45, 0, 0],
                  }
                : { translateY: [0, 8, 8], rotate: [0, 0, 45] }
            }
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="origin-center w-full h-1/5 bg-black dark:bg-white rounded-sm"
          />
          <motion.div
            initial={false}
            animate={
              open
                ? {
                    scaleX: 0,
                    translateX: -15,
                  }
                : { scaleX: 1, translateX: 0 }
            }
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="origin-center w-full h-1/5 bg-black dark:bg-white rounded-sm"
          />
          <motion.div
            initial={false}
            animate={
              !open
                ? {
                    translateY: [-8, -8, 0],
                    rotate: [-45, 0, 0],
                  }
                : { translateY: [0, -8, -8], rotate: [0, 0, -45] }
            }
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="origin-center w-full h-1/5 bg-black dark:bg-white rounded-sm"
          />
        </div>
      </div>

      <motion.aside
        href="/"
        className={`lg:w-72  md:w-1/4 w-2/3 pt-5 px-4 fixed inset-y-0 mr-5  transform z-50 lg:h-screen overflow-y-auto ${
          !open ? "-translate-x-full" : ""
        }   lg:translate-x-0  transition duration-500 ease-out bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white`}
        variants={variant}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col items-center text-center justify-center space-x-2 px-4"
          variants={navChildVariant}
        >
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
        </motion.div>

        <nav className="text-center font-light space-y-0 mt-6 font-body">
          <motion.div variants={navChildVariant}>
            <LinkDiv to="home">
              <div href="/home" className="navigation" onClick={toggleSidebar}>
                Home
              </div>
            </LinkDiv>
          </motion.div>
          <motion.div variants={navChildVariant}>
            <LinkDiv to="personal">
              <div href="/about" className="navigation" onClick={toggleSidebar}>
                About Me
              </div>
            </LinkDiv>
          </motion.div>
          <motion.div variants={navChildVariant}>
            <LinkDiv to="education">
              <div
                href="/education"
                className="navigation"
                onClick={toggleSidebar}
              >
                Education
              </div>
            </LinkDiv>
          </motion.div>
          <motion.div variants={navChildVariant}>
            <LinkDiv to="skills">
              <div
                href="/skills"
                className="navigation"
                onClick={toggleSidebar}
              >
                Skills
              </div>
            </LinkDiv>
          </motion.div>
          <motion.div variants={navChildVariant}>
            <LinkDiv to="projects">
              <div
                href="/projects"
                className="navigation"
                onClick={toggleSidebar}
              >
                Projects
              </div>
            </LinkDiv>
          </motion.div>
          <motion.div variants={navChildVariant}>
            <LinkDiv to="contact">
              <div
                href="/contact"
                className="navigation"
                onClick={toggleSidebar}
              >
                Contact
              </div>
            </LinkDiv>
          </motion.div>
        </nav>
        <motion.div className="justify-center block" variants={navChildVariant}>
          {colorTheme === "light" ? (
            <button
              className="w-full border-2 px-2 py-2 rounded border-white text-white hover:bg-white hover:text-black text-center transition-all duration-200"
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
        </motion.div>
        <Social socialLinks={data?.social} />
        <small className="text-center font-thin">
          Copyright &copy;2021 Lin Htet Swe. All Rights reserved
        </small>
      </motion.aside>
    </>
  );
};
// };
export default SideBar;
