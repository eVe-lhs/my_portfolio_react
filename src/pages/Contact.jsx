import React, { useState } from "react";
import Pages from "../components/Pages";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const reveal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
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
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.3,
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

const ContactInfo = ({ icon, text }) => {
  return (
    <motion.div
      className="flex flex-row  shadow-lg mt-8 md:mt-0"
      variants={revealLeft}
    >
      <div className="w-28 h-28 flex items-center bg-gray-200 dark:bg-gray-800">
        <div className="text-3xl mx-auto">
          <i
            className={`${icon} text-blue-500 dark:text-gray-100 font-thin`}
          ></i>
        </div>
      </div>
      <div className="ml-5 my-auto font-body font-light">
        <p className="">{text}</p>
      </div>
    </motion.div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    const messageObject = {
      name: name,
      email: email,
      message: message,
    };

    await axios
      .post("http://localhost:8000/email", messageObject)
      .then((response) => {
        toast.success(response.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch(
        (error) => console.log(error)
        // toast(error.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // })
      );
  };

  return (
    <form onSubmit={submitForm}>
      <motion.div variants={revealRight}>
        <input
          className="w-full dark:bg-gray-800 bg-gray-200  mt-2 p-3  focus:outline-none focus:shadow-outline"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
      </motion.div>
      <motion.div className="mt-8" variants={revealRight}>
        <input
          className="w-full dark:bg-gray-800 bg-gray-200  mt-2 p-3  focus:outline-none focus:shadow-outline"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
        />
      </motion.div>
      <motion.div className="mt-8" variants={revealRight}>
        <textarea
          className="w-full h-32 dark:bg-gray-800 bg-gray-200  mt-2 p-3  focus:outline-none focus:shadow-outline resize-none"
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
      </motion.div>
      <motion.div className="mt-8" variants={revealRight}>
        <button
          className="uppercase text-sm font-bold tracking-wide bg-blue-400 dark:bg-black text-gray-100 p-3   focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send Message
        </button>
      </motion.div>
    </form>
  );
};

const Contact = () => {
  return (
    <Pages small="Get In Touch" header="Contact">
      <motion.div
        className="mx-6 flex md:flex-row flex-col justify-between"
        variants={reveal}
      >
        <motion.div
          className="flex-1 flex flex-col justify-between"
          variants={container}
        >
          <ContactInfo icon="fas fa-envelope" text="linhtetswe2012@gmail.com" />
          <ContactInfo icon="fas fa-phone" text="+959-785294393" />
          <ContactInfo icon="fas fa-map-marked-alt" text="Yangon" />
        </motion.div>
        <motion.div
          className="flex-1 md:mx-6 md:mt-0 mt-6 font-subhead"
          variants={container}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </Pages>
  );
};
export default Contact;
