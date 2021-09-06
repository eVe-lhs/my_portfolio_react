import {
  FOOTBALL_LOGO,
  HTML_LOGO,
  NODE_LOGO,
  PHP_LOGO,
  PYTHON_LOGO,
  REACT_LOGO,
  WORKOUT_LOGO,
} from "../components/logos";
import { useState } from "react";

const LogoRender = (props) => {
  if (props.logo === "html") {
    return <HTML_LOGO />;
  } else if (props.logo === "react") {
    return <REACT_LOGO />;
  } else if (props.logo === "node") {
    return <NODE_LOGO />;
  } else if (props.logo === "python") {
    return <PYTHON_LOGO />;
  } else if (props.logo === "php") {
    return <PHP_LOGO />;
  } else if (props.logo === "football") {
    return <FOOTBALL_LOGO />;
  } else if (props.logo === "workout") {
    return <WORKOUT_LOGO />;
  } else {
    return <HTML_LOGO />;
  }
};

const ProgressBar = (props) => {
  const Emoji = () => {
    if (props.percentage >= 90) {
      return <span>&#128526;</span>;
    } else if (props.percentage >= 70) {
      return <span>&#128516;</span>;
    } else if (props.percentage >= 50) {
      return <span>&#128517;</span>;
    } else if (props.percentage >= 30) {
      return <span>&#128528;</span>;
    } else {
      return <span>&#128532;</span>;
    }
  };
  const [showLogoName, setShowLogoName] = useState(false);
  return (
    <div className="relative pt-1 w-full  ">
      <div className="flex mb-2 items-center justify-between">
        <div
          className="w-7 h-7"
          onMouseEnter={() => setShowLogoName(true)}
          onMouseLeave={() => setShowLogoName(false)}
        >
          <LogoRender logo={props.logo} />
        </div>
        <div className={`${showLogoName ? "absolute" : "hidden"} `}>
          <div className="absolute top-0 z-10 w-auto p-2 -mt-4 text-sm leading-tight text-gray-900 transform -translate-x-1/2 -translate-y-full bg-gray-300 rounded-lg shadow-lg">
            {props.label}
          </div>
        </div>
        <div>
          <span className="text-lg font-semibold inline-block py-1 px-2 uppercase rounded-full ">
            <Emoji />
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-600">
        <div
          style={{ width: `${props.percentage}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500 dark:bg-white dark:text-gray-500 border-r-2 border-gray-800 dark:border-gray-800 "
        ></div>
      </div>
    </div>
  );
};

const Skills = ({ profileData }) => {
  return (
    <div>
      <div className="mx-2 my-5 p-3 border-b-2 flex justify-between mt-4 text-gray-700 dark:text-gray-200">
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white ">
          My Skills
        </h1>
      </div>

      <div className="px-2 pt-0 pb-4">
        <div className="flex flex-col space-y-1 items-center mt-2 text-gray-700 dark:text-gray-200">
          <ProgressBar
            percentage="90"
            label="HTML/CSS"
            icon="devicon-html5-plain-wordmark"
            logo="html"
          />
          <ProgressBar percentage="70" label="Javascript/React" logo="react" />
          <ProgressBar percentage="50" label="Javascript/Node" logo="node" />
          <ProgressBar percentage="40" label="Php" logo="php" />
          <ProgressBar percentage="15" label="Python" logo="python" />
          <ProgressBar percentage="90" label="Football" logo="football" />
          <ProgressBar percentage="60" label="Workout" logo="workout" />
        </div>
      </div>
    </div>
  );
};
export default Skills;
