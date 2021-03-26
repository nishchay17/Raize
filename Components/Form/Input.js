import React from "react";
import { Box, Text } from "rebass";

function Input({ label, ...props }) {
  return (
    <Box mb="2rem">
      <Text as="label" fontSize={{ xs: "1.2rem", sm: "1rem" }}>
        {label}
      </Text>
      <br />
      <Box
        as="input"
        type="text"
        mt="0.5rem"
        fontSize={{ xs: "1.2rem", sm: "1.1rem" }}
        p="0.4rem 0.7rem"
        width={{ xs: "100%", sm: "17rem" }}
        sx={{
          borderRadius: "5px",
          outline: "none",
          border: "2px solid",
          borderColor: "purple",
          ":focus": {
            borderColor: "primary",
          },
        }}
        {...props}
      />
    </Box>
  );
}

export default Input;
