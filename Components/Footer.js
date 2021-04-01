import React from "react";
import { Flex, Text, Box } from "rebass";
import Container from "./Common/Container";
import Link from "next/link";

function Footer() {
  return (
    <Flex bg="dark" color="white" mt="1rem" pb={{ xs: "3rem", sm: 0 }}>
      <Container width="100%">
        <Flex width="100%" py="1.5rem">
          <Box>
            <Text
              as="h4"
              mr={{ xs: "0", sm: "7rem" }}
              fontSize="2.5rem"
              sx={{
                userSelect: "none",
                cursor: "pointer",
              }}
              letterSpacing="1px"
              fontFamily="Inconsolata"
            >
              RAIZE
            </Text>
          </Box>
          <Flex flexDirection={{ xs: "column", sm: "row" }} ml="1.5rem">
            <Link href="/">
              <Text as="a" sx={{ cursor: "pointer" }} p="0.5rem">
                Home
              </Text>
            </Link>
            <Link href="/category">
              <Text as="a" sx={{ cursor: "pointer" }} p="0.5rem">
                Category
              </Text>
            </Link>
            <Link href="/questions">
              <Text as="a" sx={{ cursor: "pointer" }} p="0.5rem">
                Questions
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}

export default Footer;
