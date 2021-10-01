import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

const revealUp = {
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

const revealDown = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const components = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 1,
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Pages({ small, header, children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div className="pt-40 mt-5 mx-6" ref={ref}>
      <motion.div className="mx-2  p-3 text-gray-700 dark:text-gray-200 mb-5 tracking-widest">
        <motion.span
          className="text-sm font-extralight   text-gray-800 dark:text-white font-body mt-36"
          variants={revealDown}
          animate={controls}
          initial="hidden"
        >
          {small}
        </motion.span>
        <motion.div
          className="text-xl font-light text-gray-800 dark:text-white font-subhead mt-5"
          variants={revealUp}
          animate={controls}
          initial="hidden"
        >
          {header}
        </motion.div>
      </motion.div>
      <motion.div variants={components} initial="hidden" animate={controls}>
        {children}
      </motion.div>
    </motion.div>
  );
}
