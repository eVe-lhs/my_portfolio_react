import SideBar from "./components/SideBar";
import { useQuery } from "@apollo/client";
import ParticlesCpn from "./components/ParticlesCpn";
import Home from "./pages/Home";
import Education from "./pages/Education";
import { getProfileAndSocialData } from "./lib/data";
import Personal from "./pages/Personal";
import Skills from "./pages/Skills";
import { useState } from "react";
import useDarkMode from "./hook/useDarkMode";
import ProjectsPage from "./pages/Projects";
// const Page = (props) => {
//   return <div className="h-screen"></div>
// }

const App = () => {
  const [setTheme, colorTheme] = useDarkMode();

  const { loading, error, data } = useQuery(getProfileAndSocialData);
  if (loading) return <div>loading...</div>;
  return (
    <>
      <ParticlesCpn colorTheme={colorTheme} />
      <div className="lg:w-4/5 mx-auto">
        <SideBar data={data} setTheme={setTheme} colorTheme={colorTheme} />
        <div className="z-30  lg:ml-72 px-10 py-5">
          <div className="flex z-40 h-screen" id="home">
            <Home />
          </div>
          <div className="z-40 " id="education">
            <Education profileData={data.profile} />
          </div>
          <div className=" z-40 " id="personal">
            <Personal profileData={data.profile} />
          </div>
          <div className=" z-40 " id="skills">
            <Skills />
          </div>
          <div className=" z-40 " id="projects">
            <ProjectsPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
