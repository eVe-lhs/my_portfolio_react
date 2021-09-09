import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <motion.div className="relative flex-1 flex justify-evenly w-full my-3 lg:my-0 lg:mb-5">
        <div className="flex-1 my-auto mx-5 text-center z-10">
          <h2 className="md:text-6xl text-4xl font-head">Its Lin Htet Swe </h2>
          <p className="md:text-base mt-4 text-lg md:hidden block font-body font-light">
            A Computer Science Student from Myanmar
          </p>
          <p className="md:text-base mt-4 text-lg hidden md:block font-body font-light">
            A Computer Science Student, a wanna be web-developer and passionate
            in gaming and football
          </p>
        </div>{" "}
        <motion.svg
          className="absolute z-0 dark:inline-block hidden h-full"
          id="visual"
          viewBox="0 0 900 675"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g transform="translate(409.77368503746135 311.4633991151599)">
            <motion.path
              initial={{
                d: "M134.1 -209.6C201.6 -165.4 303.2 -175.1 338.8 -141.7C374.4 -108.2 344.1 -31.5 317.5 34.6C290.8 100.8 267.8 156.5 224.8 180.6C181.8 204.8 118.8 197.4 58.3 229.2C-2.3 261 -60.3 332 -99.7 326.4C-139.1 320.8 -159.9 238.7 -194.7 179.4C-229.6 120 -278.6 83.6 -274.3 45.7C-270 7.9 -212.3 -31.4 -172.9 -62.9C-133.5 -94.4 -112.4 -118.2 -86.6 -181.4C-60.8 -244.6 -30.4 -347.3 1.5 -349.6C33.3 -351.9 66.7 -253.8 134.1 -209.6",

                scale: 0.5,
              }}
              animate={{
                d: "M140.3 -212.8C190.5 -186 245.8 -161.8 297.5 -116C349.2 -70.3 397.3 -3.1 401.3 66.7C405.3 136.6 365.1 209.1 309.6 262.2C254.1 315.3 183.3 349.1 109.1 370.1C35 391.2 -42.4 399.5 -82.3 354.1C-122.3 308.7 -124.9 209.6 -133.4 145.7C-141.8 81.8 -156 53.2 -172.4 17.6C-188.7 -18 -207.1 -60.5 -211.4 -115.4C-215.6 -170.2 -205.7 -237.4 -168.1 -269.9C-130.5 -302.4 -65.2 -300.2 -10.1 -284.5C45.1 -268.8 90.1 -239.5 140.3 -212.8",

                scale: 1.1,
              }}
              fill="#1f2937"
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.path>
          </motion.g>
        </motion.svg>
      </motion.div>
    </>
  );
}
