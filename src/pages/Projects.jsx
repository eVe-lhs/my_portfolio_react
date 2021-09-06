import { useState } from "react";

const ProjectCard = ({ imageUrl, header, description, tags }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative rounded-lg mx-auto p-3 overflow-hidden bg-white shadow-lg dark:bg-gray-800 opacity-90"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute w-full h-full z-20 bg-green-500 flex transition duration-200 ease-in-out ${
          hovered ? "opacity-60" : "opacity-0"
        } `}
      ></div>
      <div className="absolute w-full h-full z-20 flex flex-col justify-center items-center text-center px-4">
        <h3
          className={`text-white font-semibold text-2xl flex transition duration-200 ease-in-out ${
            hovered
              ? "opacity-100 transform -translate-x-0"
              : "opacity-0 transform translate-x-full"
          }`}
        >
          {header}
        </h3>
        <p className="text-white text-lg mt-4 leading-relaxed hidden md:flex">
          {description}
        </p>
        <div className="mt-4">
          {tags.map((tag) => (
            <span
              className="text-white uppercase text-sm tracking-wide m-2 bg-green-700 px-2 py-1 rounded-lg"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full h-72 z-0 relative">
        <img
          className="absolute object-fill object-center"
          src={imageUrl}
          alt={header}
        />
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div>
      <div className="ml-3 md:mr-3 md:grid md:grid-cols-4 flex-col gap-3 space-y-4 md:space-y-0 md:mt-3 my-8 ">
        <div className="max-w-xs ">
          <ProjectCard
            description="sadjlfjlasjlkdfjlkjsdlkfjl;ajslfj"
            imageUrl="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            header="This is the header"
            tags={["php", "laravel"]}
          />
        </div>
        <div>
          <ProjectCard
            imageUrl="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            header="This is the header"
            tags={["php", "laravel"]}
          />
        </div>
        <div>
          <ProjectCard
            imageUrl="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            header="This is the header"
            tags={["php", "laravel"]}
          />
        </div>
        <div>
          <ProjectCard
            imageUrl="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            header="This is the header"
            tags={["php", "laravel"]}
          />
        </div>{" "}
        <div className="min-w-min">
          <ProjectCard
            description="sadjlfjlasjlkdfjlkjsdlkfjl;ajslfj"
            imageUrl="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            header="This is the header"
            tags={["php", "laravel"]}
          />
        </div>{" "}
        <div className="min-w-min">
          <ProjectCard
            description="sadjlfjlasjlkdfjlkjsdlkfjl;ajslfj"
            imageUrl="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            header="This is the header"
            tags={["php", "laravel"]}
          />
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
