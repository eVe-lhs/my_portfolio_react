import { motion } from "framer-motion";

const socialVariant = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Social = ({ socialLinks }) => {
  return (
    <>
      <div className="px-6 py-4">
        <div className="flex items-center justify-center space-x-3">
          <motion.a href={socialLinks.facebook} variants={socialVariant}>
            <button className="bg-blue-500  px-2 py-2 font-semibold text-white  inline-flex items-center space-x-2 rounded-full hover:opacity-50">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </motion.a>
          <motion.a href={socialLinks.linkedIn} variants={socialVariant}>
            <button className="px-2 py-2 font-semibold text-white  inline-flex items-center space-x-2 rounded-full hover:opacity-50">
              <img alt="linked-in" className="rounded-full object-contain w-24 h-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"/>
            </button>
          </motion.a>
          <motion.a href={socialLinks?.instagram} variants={socialVariant}>
            <button className="bg-red-500  px-2 py-2 font-semibold text-white  inline-flex items-center space-x-2 rounded-full hover:opacity-50">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                  fill="currentColor"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </motion.a>
          <motion.a href={socialLinks?.github} variants={socialVariant}>
            <button className="bg-black  px-2 py-2 font-semibold text-white  inline-flex items-center space-x-2 rounded-full hover:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </button>
          </motion.a>
        </div>

        <div className="flex items-center mt-4 text-gray-700 text-gray-200"></div>
      </div>
    </>
  );
};
