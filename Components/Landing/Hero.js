import React from "react";
import { Box, Text, Flex, Image } from "rebass";
import Container from "../Common/Container";
import Animation from "../Common/Animation";
import scroll from "../../public/animation/scroll.json";
import Button from "../Common/Button";
import { useRouter } from "next/router";
import { useUser } from "../../redux/UserSlice";

function Hero() {
  const router = useRouter();

  const { userState } = useUser();

  return (
    <Container>
      <Flex
        width="100%"
        mb="1.5rem"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column-reverse", sm: "row" }}
      >
        <Box flex={1}>
          <Text
            as="h1"
            fontSize={{ xs: "2.5rem", sm: "3.2rem" }}
            fontWeight="500"
            py="0.5rem"
            lineHeight="3.2rem"
          >
            Prepare for Interviews
          </Text>
          <Text as="p" mt="1rem" fontFamily="Dancing Script" fontSize="2.5rem">
            Share solve learn
          </Text>
          <Flex mt="1.5rem">
            {userState.isLoggedIn ? (
              <Button
                fontSize={{ xs: "1.3rem", sm: "1.2rem" }}
                onClick={() => router.push("/add")}
              >
                Add question
              </Button>
            ) : (
              <Button
                fontSize={{ xs: "1.3rem", sm: "1.2rem" }}
                onClick={() => router.push("/signup")}
              >
                Sign up
              </Button>
            )}
            <Button
              variant="outline"
              fontSize={{ xs: "1.3rem", sm: "1.2rem" }}
              onClick={() => router.push("/questions")}
              ml="1.5rem"
            >
              All questions
            </Button>
          </Flex>
          <Flex mt={{ xs: "1.5rem", sm: "3.5rem" }} alignItems="center">
            <Text mr="1rem" display={{ xs: "none", sm: "block" }} mb="0.45rem">
              Scroll down to know more
            </Text>
            <Text mr="1rem" display={{ xs: "block", sm: "none" }}>
              Swipe down to know more
            </Text>
            <Animation lotti={scroll} width="2rem" />
          </Flex>
        </Box>
        <Image flex={1} src="/svg/people.svg" />
      </Flex>
    </Container>
  );
}

export default Hero;
