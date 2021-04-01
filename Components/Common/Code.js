import React from "react";
import { Box, Text } from "rebass";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierHeathDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function Code({ children }) {
  return (
    <Box
      p="1.5rem"
      sx={{ border: "1px solid", borderColor: "primary", borderRadius: "5px" }}
    >
      <Text mb="0.5rem">Code</Text>
      <SyntaxHighlighter
        showLineNumbers
        wrapLongLines
        wrapLines
        language="javascript"
        style={atelierHeathDark}
      >
        {children}
      </SyntaxHighlighter>
    </Box>
  );
}

export default Code;
