import Particles from "react-particles-js";

const ParticlesCpn = ({ colorTheme }) => {
  return (
    <Particles
      className="fixed h-screen w-screen"
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: false,
            },
          },
          color: {
            value: `${colorTheme === "dark" ? "#ffffff" : "#000000"}`,
          },
          size: {
            value: 15,
            random: true,
            anim: {
              speed: 4,
              size_min: 5,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 0.5,
            direction: "none",
            out_mode: "out",
          },
          shape: {
            type: ["image"],
            image: [
              {
                src: `${
                  colorTheme === "light"
                    ? "/assets/1-white.png"
                    : "/assets/1_black.png"
                }`,
                height: 25,
                width: 20,
              },
              {
                src: `${
                  colorTheme === "light"
                    ? "/assets/0-white.png"
                    : "/assets/0_black.png"
                }`,
                height: 25,
                width: 20,
              },
            ],
          },
        },
      }}
    />
  );
};
export default ParticlesCpn;
