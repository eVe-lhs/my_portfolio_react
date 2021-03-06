import SideBar from "./components/SideBar";
import { useQuery } from "@apollo/client";
import ParticlesCpn from "./components/ParticlesCpn";
import Home from "./pages/Home";
import Education from "./pages/Education";
import { getProfileAndSocialData } from "./lib/data";
import Personal from "./pages/Personal";
import Skills from "./pages/Skills";
import useDarkMode from "./hook/useDarkMode";
import ProjectsPage from "./pages/Projects";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// const Page = (props) => {
//   return <div className="h-screen"></div>
// }

const App = () => {
  const [setTheme, colorTheme] = useDarkMode();

  const { loading, data } = useQuery(getProfileAndSocialData);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <ParticlesCpn colorTheme={colorTheme} />
      <div className="lg:w-4/5 mx-auto relative w-screen">
        <SideBar data={data} setTheme={setTheme} colorTheme={colorTheme} />
        <div className="lg:ml-72 mb-10">
          <div className="flex h-screen" id="home">
            <Home colorTheme={colorTheme} />
          </div>
          <div id="personal">
            <Personal profileData={data.profile} />
          </div>
          <div id="education">
            <Education profileData={data.profile} />
          </div>

          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <ProjectsPage />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>{" "}
      <ToastContainer />
    </>
  );
};

export default App;
