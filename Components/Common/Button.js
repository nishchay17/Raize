import React from "react";
import { Button as RebassButton } from "rebass";

function Button({ children, ...props }) {
  return (
    <RebassButton
      fontSize="1.2rem"
      {...props}
      sx={{
        outline: "none",
        cursor: "pointer",
        transition: "0.2s all",
        ":hover": { background: "blue", color: "white" },
      }}
    >
      {children}
    </RebassButton>
  );
}

export default Button;
