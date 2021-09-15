import { useState } from "react";
import Pages from "../components/Pages";

const TabMenu = ({ tab, setTab }) => {
  const activeClass = "border-b-2 dark:border-white border-black";
  return (
    <div className="flex md:mx-6 mx-3 md:text-lg text-sm mb-5 flex-row justify-center font-body ">
      <div
        className={`${tab === "All" ? activeClass : ""} cursor-pointer px-5`}
        onClick={() => setTab("All")}
      >
        All
      </div>
      <div
        className={`${tab === "Web" ? activeClass : ""} cursor-pointer px-5`}
        onClick={() => setTab("Web")}
      >
        Web Development
      </div>
      <div
        className={`${
          tab === "Programming" ? activeClass : ""
        } cursor-pointer px-5`}
        onClick={() => setTab("Programming")}
      >
        Programming
      </div>
      <div
        className={`${tab === "Other" ? activeClass : ""} cursor-pointer px-5`}
        onClick={() => setTab("Other")}
      >
        Others
      </div>
    </div>
  );
};

const ProjectCard = ({ imageUrl, header, description, tags }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative bg-black w-full rounded-md overflow-hidden  shadow-lg  opacity-90 font-body"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
    </div>
  );
};

const projects = [
  {
    header: "This is header",
    tags: ["php", "laravel"],
    type: "Web",
    imageUrl:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    header: "This is header",
    tags: ["php", "laravel"],
    type: "Other",
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
    type: "Web",
    imageUrl:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    header: "This is header",
    tags: ["php", "laravel"],
    type: "Other",
    imageUrl:
      "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
];

const Items = ({ tab }) => {
  const Projects =
    tab === "All"
      ? projects
      : projects.filter((project) => project.type === tab);
  return (
    <div className="mx-8 md:grid md:grid-cols-2 flex-col gap-10 space-y-4 md:space-y-0 md:mt-3 ">
      {Projects.map((project) => (
        <ProjectCard
          imageUrl={project.imageUrl}
          header={project.header}
          tags={project.tags}
        />
      ))}
    </div>
  );
};

const ProjectsPage = () => {
  const [tab, setTab] = useState("All");
  return (
    <Pages header="Projects" small="Things that I have done">
      <TabMenu tab={tab} setTab={setTab} />
      <Items tab={tab} />
    </Pages>
  );
};
export default ProjectsPage;
