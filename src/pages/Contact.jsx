import React from "react";
import Pages from "../components/Pages";

const ContactInfo = ({ icon, text }) => {
  return (
    <div className="flex flex-row  shadow-lg mt-8 md:mt-0">
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
    </div>
  );
};

const ContactForm = () => {
  return (
    <>
      <div>
        <input
          class="w-full dark:bg-gray-800 bg-gray-200  mt-2 p-3  focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="mt-8">
        <input
          class="w-full dark:bg-gray-800 bg-gray-200 text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline"
          placeholder="Email"
          type="text"
        />
      </div>
      <div class="mt-8">
        <textarea
          class="w-full h-32 dark:bg-gray-800 bg-gray-200 text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline"
          placeholder="Message"
        ></textarea>
      </div>
      <div class="mt-8">
        <button class="uppercase text-sm font-bold tracking-wide bg-blue-400 dark:bg-black text-gray-100 p-3   focus:outline-none focus:shadow-outline">
          Send Message
        </button>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <Pages small="Get In Touch" header="Contact">
      <div className="mx-6 flex md:flex-row flex-col justify-between">
        <div className="flex-1 flex flex-col justify-between">
          <ContactInfo icon="fas fa-envelope" text="linhtetswe2012@gmail.com" />
          <ContactInfo icon="fas fa-phone" text="+959-785294393" />
          <ContactInfo icon="fas fa-map-marked-alt" text="Yangon" />
        </div>
        <div className="flex-1 md:mx-6 md:mt-0 mt-6 font-subhead">
          <ContactForm />
        </div>
      </div>
    </Pages>
  );
};
export default Contact;
