import { motion } from "framer-motion";
import React from "react";

const loaderVariants = {
  animationOne: {
    x: [-20, -20, 20],
    y: [0, 50, 50],
    transition: {
      y: {
        ease: "easeInOut",
        duration: 0.3,
        repeatType: "mirror",
        repeat: Infinity,
      },
      x: {
        duration: 0.3,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  },
};

const Loader = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-200 dark:bg-gray-800 bg-opacity-80">
      <motion.div
        variants={loaderVariants}
        className="w-5 h-5 m-auto rounded-full dark:bg-white bg-black shadow-xl"
        animate="animationOne"
      ></motion.div>
    </div>
  );
};

export default Loader;
