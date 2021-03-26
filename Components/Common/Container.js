import React from "react";
import { Flex } from "rebass";

function Container({ children, ...props }) {
  return (
    <Flex
      {...props}
      flexDirection="column"
      px={{ xs: "1rem", sm: "2rem" }}
      sx={{ maxWidth: ["", "", "1350px"], marginX: "auto" }}
    >
      {children}
    </Flex>
  );
}

export default Container;
