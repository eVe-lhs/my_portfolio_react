import React, { useState, useRef, useEffect } from "react";
import Pages from "../components/Pages";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const reveal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    trasition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const revealUp = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const TabMenu = ({ tabs, setTab, value, setValue }) => {
  const childRefs = useRef(new Map());
  const tabListRef = useRef();
  const [slider, setSlider] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const target = childRefs.current.get(value);
    const container = tabListRef.current;
    if (target) {
      const cRect = container.getBoundingClientRect();

      // when container is `display: none`, width === 0.
      // ignore this case
      if (cRect.width === 0) {
        return;
      }

      const tRect = target.getBoundingClientRect();
      const left = tRect.left - cRect.left;
      const right = cRect.right - tRect.right;

      setSlider({
        hasValue: true,
        left: left + 8,
        right: right + 8,
      });
    }
  }, [value]);

  return (
    <div className="overflow-y-hidden">
      <motion.div
        className="flex relative md:mx-6 mx-3 md:text-lg text-sm mb-5 flex-row justify-center font-body"
        variants={container}
        ref={tabListRef}
      >
        {tabs.map((tab, index) => (
          <motion.div
            className={`cursor-pointer px-5 overflow-hidden pb-3`}
            onClick={() => {
              setTab(tab);
              setValue(index);
            }}
            ref={(element) => childRefs.current.set(index, element)}
            variants={revealUp}
          >
            {tab}
          </motion.div>
        ))}
        {slider.hasValue && (
          <motion.div
            className="bg-black dark:bg-white h-1 bottom-0 absolute"
            layout
            transition={{
              bounceDamping: 3,
            }}
            initial={false}
            style={{
              left: slider.left,
              right: slider.right,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

const projects = [
  {
    header: "This is header",
    tags: ["php", "laravel"],
    type: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    header: "This is header",
    tags: ["php", "laravel"],
    type: "Others",
    imageUrl:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    header: "This is header",
    tags: ["php", "laravel"],
    type: "Programming",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    header: "This is header",
    tags: ["php", "laravel"],
    type: "Programming",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    header: "This is header",
    tags: ["php", "laravel"],
    type: "Web Development",
    imageUrl:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    header: "This is header",
    tags: ["php", "laravel"],
    type: "Others",
    imageUrl:
      "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
];

const Items = ({ children, value }) => {
  return (
    <div className="flex overflow-hidden w-full">
      <motion.div
        className="flex flex-row flex-1 "
        transition={{
          tension: 190,
          friction: 70,
          mass: 0.4,
          staggerChildren: 0.5,
        }}
        animate={{ x: value * -100 + "%" }}
      >
        {React.Children.map(children, (child, i) => (
          <div className="w-full flex-shrink-0 overflow-hidden outline-none">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ imageUrl, header, tags, tab, type, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className={`relative bg-black w-full rounded-md overflow-hidden  shadow-lg  opacity-90 font-body ${
        tab === "All" || tab === type ? "block" : "hidden"
      } `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={cardVariant}
      initial={false}
    >
      <div
        className={`absolute w-full h-full z-20 bg-gray-800 flex transition duration-200 ease-in-out ${
          hovered ? "opacity-90" : "opacity-0"
        } `}
      ></div>
      <div className="absolute w-full h-full z-20 flex flex-col justify-center items-center  px-4">
        <h3
          className={`text-white font-semibold text-xl flex transition duration-200 ease-in-out ${
            hovered
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform -translate-y-7"
          }`}
        >
          {header}
        </h3>

        <div
          className={`mt-4 transform duration-200 ease-in-out ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          } `}
        >
          {tags.map((tag) => (
            <span
              className={`text-white uppercase text-sm tracking-wide m-2 px-2 py-1`}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full h-72 relative">
        <img
          className={` h-72 w-full  transform duration-200 ${
            hovered ? "scale-110" : "scale-100"
          } `}
          src={imageUrl}
          alt={header}
        />
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [value, setValue] = useState(0);
  const [tab, setTab] = useState("All");
  const tabs = ["All", "Web Development", "Programming", "Others"];
  const Projects =
    tab === "All"
      ? projects
      : projects.filter((project) => project.type === tab);
  return (
    <Pages header="Projects" small="Things that I have done">
      <motion.div variants={reveal}>
        <TabMenu
          tab={tab}
          setTab={setTab}
          tabs={tabs}
          value={value}
          setValue={setValue}
        />
        <Items value={value} tab={tab}>
          {tabs.map((tab) => (
            <motion.div
              className="mx-8 md:grid md:grid-cols-2 flex-col gap-10 space-y-4 md:space-y-0 md:mt-3 "
              variants={container}
            >
              {Projects.map((project, index) => (
                <ProjectCard
                  imageUrl={project.imageUrl}
                  header={project.header}
                  tags={project.tags}
                  index={index}
                  tab={tab}
                  type={project.type}
                />
              ))}
            </motion.div>
          ))}
        </Items>
      </motion.div>
    </Pages>
  );
};
export default ProjectsPage;
