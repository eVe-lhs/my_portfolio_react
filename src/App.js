import SideBar from "./components/SideBar";
import ParticlesCpn from "./components/ParticlesCpn";
import Home from "./pages/Home";
import Education from "./pages/Education";
// import { getProfileAndSocialData } from "./lib/data";
import Personal from "./pages/Personal";
import Skills from "./pages/Skills";
import useDarkMode from "./hook/useDarkMode";
import ProjectsPage from "./pages/Projects";
import Contact from "./pages/Contact";
// import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data } from "./lib/data";

// import WireframeTriangleBall from "./components/WireFrameTriangleBall";
// const Page = (props) => {
//   return <div className="h-screen"></div>
// }

const App = () => {
  const [setTheme, colorTheme] = useDarkMode();

  // const { loading, data } = useQuery(getProfileAndSocialData);

  // if (loading) {
  //   return <Loader />;
  // }

  // return (
  //  <WireframeTriangleBall />
  // );
  return (
    <>
      <ScrollProgress />
      <ParticlesCpn colorTheme={colorTheme} />
      <div className="lg:w-4/5 mx-auto relative w-screen">
        <SideBar setTheme={setTheme} colorTheme={colorTheme} />
        <div className="lg:ml-72 mb-10">
          <div className="flex h-screen" id="home">
            <Home colorTheme={colorTheme} />
          </div>
          <div id="personal">
            <Personal profileData={data.profile} />
            {/* <Personal profileData={data.profile} /> */}
          </div>
          <div id="education">
            {/* <Education profileData={data.profile} /> */}
            <Education />
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
          {/* <Canvas camera={{ position: [0, 0, 5] }}>
            <AmbientLight />
            <Cube position={[0, 0, 0]} info="Information inside the cube" />
          </Canvas> */}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
