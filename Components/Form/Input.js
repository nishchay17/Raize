import React from "react";
import { Box, Text } from "rebass";

function Input({ label, errors, ...props }) {
  return (
    <Box mb="1.5rem">
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
          border: "1px solid",
          borderColor: "dark",
          letterSpacing: "0.5px",
          ":focus": {
            borderColor: "blue",
          },
        }}
        {...props}
      />
      {errors && errors[props.name] && (
        <Text color="error" mt="0.5rem">
          {errors[props.name]?.message}
        </Text>
      )}
    </Box>
  );
}

export default Input;
