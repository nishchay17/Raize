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
    blue: "#28c7fa",
    purple: "#775ada",
    darkBlue: "#002651",
    dark: "#1a1c20",
    gray: "#f6f6ff",
    background: "rgba(0, 0, 0, 0)",
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
    },
    outline: {
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 2px",
    },
  },
};
