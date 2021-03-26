import React from "react";
import { Button as RebassButton } from "rebass";

function Button({ children, ...props }) {
  return (
    <RebassButton
      bg="#775ada"
      fontSize="1.2rem"
      {...props}
      sx={{
        outline: "none",
        cursor: "pointer",
        transition: "0.2s all",
        ":hover": { background: "#ff304f", color: "white" },
      }}
    >
      {children}
    </RebassButton>
  );
}

export default Button;
