import { useState } from "react";
import Pages from "../components/Pages";

const Card = ({ picture, header, description, border, background }) => {
  const [hovered, setHovered] = useState(false);
  const borderClass = `relative rounded-lg md:w-48 w-full h-48 shadow-xl border-b-2 ${border} z-0`;

  return (
    <div
      className={borderClass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={` absolute rounded-lg h-full  mt-48 md:w-48 mb-0 z-20 flex flex-col justify-center items-center -translate-y-full transform origin-bottom transition-all duration-50000  text-center ${background} bg-opacity-90 ${
          hovered ? "opacity-100 scale-y-100" : "scale-y-0 opacity-0"
        }`}
      >
        <h3 className="text-black font-semibold text-md flex transition duration-200 ease-in-out">
          {header}
        </h3>
        <p className="text-black text-md mt-4 leading-relaxed hidden md:flex">
          "{description}"
        </p>
      </div>
      <div className="p-3 flex flex-col">
        <img
          className="object-scale-down w-full h-40 mx-auto my-4"
          src={picture}
          alt={description}
        />
      </div>
    </div>
  );
};

const Personal = ({ profileData }) => {
  return (
    <Pages small="My Personal Brief" header="About me">
      <div className="md:flex mt-20 font-body font-light">
        <div className="px-6 ">
          <p className="leading-8">
            <span className="font-semibold">Hi I am Lin Htet Swe. </span>I am a
            Computer Science Student from Myanmar. I love doing both Front-end
            and Back-end Web Development. I like playing Video Games and a huge
            fan of Dota2. I also enjoy playing and watching football and a huge
            fan of Arsenal. These are some of my favourite things ...
          </p>
          <div className="flex md:flex-row flex-col mt-4 text-gray-700 dark:text-gray-200 justify-between ">
            <Card
              picture="https://www.pngkit.com/png/full/128-1280671_dota-2-logo-png-image-library-download-logo.png"
              border="border-red-800"
              header="My Favourite Video Game"
              description="Dota2"
              background="bg-red-800"
            />
            <Card
              picture="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png"
              border="border-red-600"
              header="My Favourite Football Club"
              description="Arsenal"
              background="bg-red-600"
            />
            <Card
              picture="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              border="border-yellow-500"
              header="My Favourite Programming Language"
              description="Javascript"
              background="bg-yellow-500"
            />
            <Card
              picture="https://c.tenor.com/SME6abPdZjQAAAAM/ronaldo-cr7.gif"
              border="border-white"
              header="My Most Admired Person"
              description="Cristiano Ronaldo"
              background="bg-white"
            />
          </div>
        </div>
      </div>
    </Pages>
  );
};
export default Personal;
