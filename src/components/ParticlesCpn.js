import Particles from "react-particles-js";

const ParticlesCpn = ({ colorTheme }) => {
  return (
    <Particles
      className="fixed h-screen w-screen"
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
            },
          },
          color: {
            value: `${colorTheme === "dark" ? "#ffffff" : "#000000"}`,
          },
          size: {
            value: 10,
            random: true,
            anim: {
              speed: 2,
              size_min: 2,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 0.3,
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
                height: 15,
                width: 15,
              },
              {
                src: `${
                  colorTheme === "light"
                    ? "/assets/0-white.png"
                    : "/assets/0_black.png"
                }`,
                height: 15,
                width: 15,
              },
            ],
          },
        },
      }}
    />
  );
};
export default ParticlesCpn;
