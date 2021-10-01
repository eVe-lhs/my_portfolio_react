import { useState } from "react";
import Pages from "../components/Pages";
import { AnimatePresence, motion } from "framer-motion";

const reveal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const revealUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const accordion = {
  open: { opacity: 1, height: "auto" },
  collapsed: {
    opacity: 0,
    height: 0,
  },
  transition: {
    duration: 0.7,
    ease: "easeOut",
  },
};

const ParentProgress = ({ header, percentage, logo, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="my-4 relative"
      variants={revealUp}
      onClick={() => setOpen(!open)}
    >
      <div className="shadow-md py-5 px-3 flex flex-row justify-between text-lg font-body font-light  bg-gray-200 dark:bg-gray-800 rounded-md">
        <div>{header}</div>
        <i
          className={`fas fa-chevron-down w-5 h-5 my-auto float-right transform origin-center ${
            open ? "rotate-180" : "rotate-0"
          } duration-700 ease-in-out`}
        ></i>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={`mx-10 flex flex-col md:grid grid-flow-row grid-cols-2 gap-4 overflow-hidden items-center  text-gray-700 dark:text-gray-200`}
            variants={accordion}
            initial="collapsed"
            animate="open"
            exit="collapsed"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProgressBar = (props) => {
  let fillColor;
  if (props.percentage >= 75) {
    // Emoji = <span>&#128526;</span>;
    fillColor = "bg-green-500";
  } else if (props.percentage >= 50) {
    // Emoji = <span>&#128516;</span>;
    fillColor = "bg-yellow-500";
  } else if (props.percentage >= 25) {
    // Emoji = <span>&#128517;</span>;
    fillColor = "bg-red-500";
  } else {
    // Emoji = <span>&#128532;</span>;
    fillColor = "bg-purple-500";
  }
  const [showLogoName, setShowLogoName] = useState(false);
  return (
    <div className="mt-4 w-full ">
      <div className="flex mb-2 items-center justify-between">
        <div
          className="w-7 h-7 text-2xl"
          style={{ color: `${props.color}` }}
          onMouseEnter={() => setShowLogoName(true)}
          onMouseLeave={() => setShowLogoName(false)}
        >
          <i className={props.logo} />
        </div>
        <div className={`${showLogoName ? "absolute" : "hidden"} z-50`}>
          <div className="absolute top-0  w-auto p-2 -mt-4 text-sm leading-tight text-gray-900 transform -translate-x-1/2 -translate-y-full bg-gray-300 rounded-lg shadow-lg">
            {props.label}
          </div>
        </div>
      </div>
      <div className="relative h-1 mb-4 text-xs flex rounded bg-gray-300 dark:bg-gray-600">
        <div
          style={{ width: `${props.percentage}%` }}
          className={`shadow-none flex flex-col text-center  text-white justify-center ${fillColor} dark:text-gray-500`}
        >
          <div
            className="w-1 h-4 absolute dark:bg-gray-500 bg-white "
            style={{ left: `25%` }}
          ></div>
          <div
            className="w-1 h-4 absolute dark:bg-gray-500 bg-white"
            style={{ left: `50%` }}
          ></div>
          <div
            className="w-1 h-4 absolute dark:bg-gray-500 bg-white "
            style={{ left: `75%` }}
          ></div>
          <div
            className={`w-2 h-2 absolute  ${fillColor} rounded-full`}
            style={{ left: `${props.percentage - 1}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const Skills = ({ profileData }) => {
  return (
    <Pages header="Skills" small="Things that I am good at">
      <div className="px-6 pt-0 pb-4 ">
        <motion.div className="flex flex-row space-x-3 " variants={reveal}>
          <div className="flex flex-row">
            <div className="w-1 h-4 bg-red-500 my-auto"></div>
            <p className="my-auto ml-2">Beginner</p>
          </div>
          <div>
            <div className="flex flex-row">
              <div className="w-1 h-4 bg-yellow-500 my-auto"></div>
              <p className="my-auto ml-2">Ameteur</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row">
              <div className="w-1 h-4 bg-green-500 my-auto"></div>
              <p className="my-auto ml-2">Pro</p>
            </div>
          </div>
        </motion.div>
        <ParentProgress header="Web Development" percentage="75" logo="html">
          <ProgressBar
            percentage="90"
            label="HTML/CSS"
            icon="devicon-html5-plain-wordmark"
            logo="fab fa-html5"
            color="#e34c26"
          />
          <ProgressBar
            percentage="70"
            label="Javascript/React"
            logo="fab fa-react"
            color="#61dbfb"
          />
          <ProgressBar
            percentage="50"
            label="Javascript/Node"
            logo="fab fa-node-js"
            color="#3c873a"
          />
        </ParentProgress>
        <ParentProgress header="Programming">
          <ProgressBar
            percentage="40"
            label="Php"
            logo="fab fa-php"
            color="#01a0d7"
          />
          <ProgressBar
            percentage="40"
            label="Php"
            logo="fab fa-java"
            color="#f89820"
          />
          <ProgressBar
            percentage="15"
            label="Python"
            logo="fab fa-python"
            color="#ffd43b"
          />
        </ParentProgress>
        <ParentProgress header="Sports">
          <ProgressBar
            percentage="90"
            label="Football"
            logo="fas fa-futbol"
            color="black"
          />
          <ProgressBar
            percentage="60"
            label="Workout"
            logo="fas fa-dumbbell"
            color="#555555"
          />
          <ProgressBar
            percentage="60"
            label="Swimming"
            logo="fas fa-swimmer"
            color="#00b2ff"
          />
        </ParentProgress>
        <ParentProgress header="Others">
          <ProgressBar
            percentage="90"
            label="I love eating XD"
            logo="fas fa-utensils"
            color="#b0b3b7"
          />
          <ProgressBar
            percentage="75"
            label="Sleeping is the best relaxation"
            logo="fas fa-bed"
            color="gray"
          />
          <ProgressBar
            percentage="90"
            label="Gaming"
            logo="fas fa-gamepad"
            color="blue"
          />
        </ParentProgress>
      </div>
    </Pages>
  );
};
export default Skills;
