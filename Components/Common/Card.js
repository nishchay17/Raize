import React from "react";
import { Box } from "rebass";

function Card(props) {
  return (
    <Box
      bg="white"
      p="1.5rem"
      sx={{
        borderRadius: "12px",
        boxShadow: "3px 3px 7px #dfdfdf, -3px -3px 7px #ededed",
      }}
      {...props}
    >
      {props.children}
    </Box>
  );
}

export default Card;
