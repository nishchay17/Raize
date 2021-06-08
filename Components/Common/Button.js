import React from "react";
import { Button as RebassButton } from "rebass";

import Animation from "../Common/Animation";
import Loader from "../../public/animation/loading.json";
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
      {props.disabled ? (
        <Animation lotti={Loader} width="4rem" height="1.5rem" />
      ) : (
        <>{children}</>
      )}
    </RebassButton>
  );
}

export default Button;
