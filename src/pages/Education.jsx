import Pages from "../components/Pages";
import { motion } from "framer-motion";

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

const revealLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const revealRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const TimelineItem = ({ left, type, date, description, keyProp }) => {
  let timelineClass;
  left
    ? (timelineClass =
        "mb-8 flex md:justify-between items-center w-full  md:flex-row-reverse relative")
    : (timelineClass =
        "mb-8 flex md:justify-between items-center w-full  relative");
  let iconClass;
  if (type === "born") {
    iconClass = "fas fa-hospital";
  } else if (type === "school") {
    iconClass = "fas fa-school";
  } else if (type === "travel") {
    iconClass = "fas fa-plane-departure";
  } else if (type === "graduate") {
    iconClass = "fas fa-graduation-cap";
  } else if (type === "university") {
    iconClass = "fas fa-university";
  }
  return (
    <div className={timelineClass} key={keyProp}>
      <div className="md:w-5/12 w-0"></div>
      <motion.div
        className="z-20 flex ml-1 items-center order-1 dark:bg-gray-800 bg-gray-300 shadow-xl w-12 h-12 rounded-full border-2 border-black dark:border-white"
        variants={reveal}
      >
        <h1 className="mx-auto font-semibold text-xl">
          <i className={iconClass}></i>
        </h1>
      </motion.div>
      <motion.div
        className="order-1 dark:bg-gray-800 bg-gray-300 rounded-lg shadow-xl md:w-5/12 w-4/5 px-6 py-4 ml-5 md:ml-0"
        variants={left ? revealLeft : revealRight}
      >
        <h3 className="mb-3 font-bold  text-xl">{date}</h3>
        <p className="text-lg leading-snug tracking-wide  text-opacity-100 ">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

const Education = ({ profileData }) => {
  return (
    <Pages header="Education" small="Where and when did I study?">
      <div className="md:flex mt-20 font-body font-light">
        <div className="px-6 w-full">
          <div className="container  mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden md:p-10 h-full">
              <motion.div
                className="absolute border-opacity-20  bg-black dark:bg-white h-full border-2 md:left-1/2 left-6"
                variants={reveal}
              ></motion.div>
              <TimelineItem
                keyProp="1"
                key="1"
                left={false}
                type="born"
                date="2001"
                description={[
                  "I was born in Yangon General Hospital on ",
                  <strong>20th June,2001</strong>,
                  ". I didn't have any stable address since we move around very often.",
                ]}
              />
              <TimelineItem
                keyProp="2"
                left={true}
                key="2"
                type="school"
                date="2006"
                description={[
                  "My first primary school was in a small town called ",
                  <strong>Ho-Pone</strong>,
                  " near TaungGyi in Shan State. Since then, I have studied in several different schools from different cities.",
                ]}
              />
              <TimelineItem
                keyProp="3"
                left={false}
                key="3"
                type="travel"
                date="2013"
                description={[
                  "I got my first ever oversea experience by travelling to ",
                  <strong>Hanoi,Vietnam</strong>,
                  ".",
                ]}
              />
              <TimelineItem
                keyProp="4"
                left={true}
                key="4"
                type="graduate"
                date="2017"
                description={[
                  "I graduated from high-school education by scoring ",
                  <strong>530 </strong>,
                  "marks in matriculation examination.",
                ]}
              />
              <TimelineItem
                keyProp="5"
                left={false}
                key="5"
                type="university"
                date="2018"
                description={[
                  "I got into",
                  <strong>
                    {" "}
                    University Of Information Technology, Yangon
                  </strong>,
                  " for Bachelor Degree. I majored in Software Engineering Computer Science and currently in Final Year of my undergraduate program.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </Pages>
  );
};
export default Education;
