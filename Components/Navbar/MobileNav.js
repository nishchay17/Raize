import React from "react";
import { Flex, Box } from "rebass";
import { AiOutlineHome, AiFillCheckSquare } from "react-icons/ai";
import { BiAlignJustify } from "react-icons/bi";
import { useRouter } from "next/router";

function MobileNav() {
  const router = useRouter();
  return (
    <Flex
      bg="dark"
      display={{ xs: "flex", sm: "none" }}
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        userSelect: "none",
      }}
      justifyContent="space-around"
    >
      <Flex
        alignItems="center"
        color={router.route === "/" ? "dark" : "white"}
        bg={router.route === "/" ? "white" : "dark"}
        width="100%"
        height="100%"
        p="1rem"
        onClick={() => {
          router.push("/");
        }}
      >
        <Box as={AiOutlineHome} mr="0.5rem" />
        <Box>Home</Box>
      </Flex>
      <Flex
        color={router.route === "/questions" ? "dark" : "white"}
        bg={router.route === "/questions" ? "white" : "dark"}
        alignItems="center"
        width="100%"
        height="100%"
        p="1rem"
        onClick={() => {
          router.push("/questions");
        }}
      >
        <Box as={AiFillCheckSquare} mr="0.5rem" />
        <Box>Questions</Box>
      </Flex>
      <Flex
        color={router.route === "/category" ? "dark" : "white"}
        bg={router.route === "/category" ? "white" : "dark"}
        alignItems="center"
        width="100%"
        height="100%"
        p="1rem"
        onClick={() => {
          router.push("/category");
        }}
      >
        <Box as={BiAlignJustify} mr="0.5rem" />
        <Box>Category</Box>
      </Flex>
    </Flex>
  );
}

export default MobileNav;
