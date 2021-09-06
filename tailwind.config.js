module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        body: ["'Oswald', sans-serif"],
        head: [""],
      },
      backgroundImage: (theme) => ({
        circles: "url('./backgroundImages/circles.svg')",
      }),
    },
  },
};
