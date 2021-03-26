import React from "react";
import { Flex, Text, Box } from "rebass";
import Button from "../Common/Button";
import Container from "../Common/Container";
import { useRouter } from "next/router";

function Navbar({ tab }) {
  const router = useRouter();

  return (
    <Box bg="dark">
      <Container>
        <Flex
          py="1.5rem"
          as="nav"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex fontSize="1.1rem" alignItems="center">
            <Text
              as="h2"
              mr={{ xs: "0", sm: "4rem" }}
              fontSize="2.5rem"
              color="purple"
              sx={{
                cursor: "pointer",
              }}
              letterSpacing="1px"
              fontFamily="Inconsolata"
              onClick={() => router.push("/")}
            >
              RAIZE
            </Text>
            <Text
              display={{ xs: "none", sm: "block" }}
              height="1.5rem"
              mr="1.5rem"
              sx={{
                transition: "0.2s all",
                cursor: "pointer",
                borderBottom: "2px solid",
                borderColor: tab === "home" ? "" : "rgba(0, 0, 0, 0)",
                ":hover": {
                  borderBottom: "2px solid",
                  borderColor: "purple",
                  color: "purple",
                },
              }}
              onClick={() => router.push("/")}
            >
              Home
            </Text>
            <Text
              display={{ xs: "none", sm: "block" }}
              height="1.5rem"
              mr="1.5rem"
              sx={{
                transition: "0.2s all",
                borderBottom: "2px solid",
                cursor: "pointer",
                borderColor: tab === "category" ? "" : "rgba(0, 0, 0, 0)",
                ":hover": {
                  borderBottom: "2px solid",
                  borderColor: "purple",
                  color: "purple",
                },
              }}
              onClick={() => router.push("/category")}
            >
              Category
            </Text>
            <Text
              display={{ xs: "none", sm: "block" }}
              height="1.5rem"
              sx={{
                transition: "0.2s all",
                borderBottom: "2px solid",
                borderColor: tab === "question" ? "" : "rgba(0, 0, 0, 0)",
                cursor: "pointer",
                ":hover": {
                  borderBottom: "2px solid",
                  borderColor: "purple",
                  color: "purple",
                },
              }}
              onClick={() => router.push("/questions")}
            >
              Questions
            </Text>
          </Flex>
          <Flex>
            <Button
              mr="1.5rem"
              fontSize={{ xs: "1.1rem", sm: "1rem" }}
              onClick={() => router.push("/signup")}
            >
              signup
            </Button>
            <Button
              fontSize={{ xs: "1.1rem", sm: "1rem" }}
              onClick={() => router.push("/signin")}
            >
              signin
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
