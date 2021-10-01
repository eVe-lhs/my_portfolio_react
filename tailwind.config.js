module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
      },
      zIndex: {
        100: "100",
      },
      fontFamily: {
        body: ["'Exo 2', sans-serif"],
        head: ["'Abril Fatface', cursive"],
        subhead: ["'Raleway', sans-serif"],
      },
      backgroundImage: (theme) => ({
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-conic-t": "conic-gradient(at top, var(--tw-gradient-stops))",
        "gradient-conic-r":
          "conic-gradient(at right, var(--tw-gradient-stops))",
        "gradient-conic-b":
          "conic-gradient(at bottom, var(--tw-gradient-stops))",
        "gradient-conic-l": "conic-gradient(at left, var(--tw-gradient-stops))",
        "gradient-conic-tr":
          "conic-gradient(at top right, var(--tw-gradient-stops))",
        "gradient-conic-tl":
          "conic-gradient(at top left, var(--tw-gradient-stops))",
        "gradient-conic-br":
          "conic-gradient(at bottom right, var(--tw-gradient-stops))",
        "gradient-conic-bl":
          "conic-gradient(at bottom left, var(--tw-gradient-stops))",
      }),
    },
  },
};
