import React from "react";
import { Flex, Text, Box } from "rebass";
import { useRouter } from "next/router";

import Button from "../Common/Button";
import Container from "../Common/Container";
import { useUser } from "../../redux/UserSlice";

function Navbar({ tab }) {
  const router = useRouter();
  const { userState, userDispatch } = useUser();

  return (
    <Box>
      <Container>
        <Flex
          py="1rem"
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
                ":hover": {
                  color: "blue",
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
                cursor: "pointer",
                ":hover": {
                  color: "blue",
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
                cursor: "pointer",
                ":hover": {
                  color: "blue",
                },
              }}
              onClick={() => router.push("/questions")}
            >
              Questions
            </Text>
          </Flex>
          <Flex alignItems="center">
            {userState.isLoggedIn ? (
              <>
                <Text>Hi, {userState.name}</Text>
                <Button
                  mx="1.5rem"
                  fontSize={{ xs: "1.1rem", sm: "1rem" }}
                  onClick={() => userDispatch.logout()}
                >
                  Logout
                </Button>
                <Button
                  fontSize={{ xs: "1.1rem", sm: "1rem" }}
                  onClick={() => router.push("/profile")}
                >
                  Profile
                </Button>
              </>
            ) : (
              <>
                <Button
                  fontSize={{ xs: "1.1rem", sm: "1rem" }}
                  onClick={() => router.push("/signin")}
                  mr="1.5rem"
                  variant="outline"
                >
                  Sign in
                </Button>
                <Button
                  fontSize={{ xs: "1.1rem", sm: "1rem" }}
                  onClick={() => router.push("/signup")}
                >
                  Sign up
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Navbar;
