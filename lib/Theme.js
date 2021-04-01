const breakpoints = ["0", "600px", "1024px", "1280px", "1440px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const theme = {
  breakpoints,
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    primary: "#ff304f",
    blue: "#3d5af1",
    lightBlue: "#22d1ee",
    dark: "#0e153a",
    bg: "#e2f3f5",
    background: "white",
  },
  buttons: {
    primary: {
      color: "white",
      bg: "blue",
      boxShadow: "5px 5px 8px #d7d7d7,-5px -5px 8px #e9e9e9",
    },
    outline: {
      color: "blue",
      bg: "transparent",
    },
  },
};
