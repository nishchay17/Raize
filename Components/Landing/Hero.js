import React from "react";
import { Box, Text, Flex } from "rebass";
import Container from "../Common/Container";
import Animation from "../Common/Animation";
import data from "../../public/animation/lf30_editor_gyxpmc94.json";
import mouse from "../../public/animation/lf30_editor_lfzw9h4e.json";
import Button from "../Common/Button";
import { keyframes, css } from "@emotion/react";
import { useRouter } from "next/router";

const rotate = keyframes`
  from {
    transform: translateY(-1rem);
  }
  50% {
    transform: translateY(1rem);
  }
  to {
    transform: translateY(-1rem);
  }
`;

function Hero() {
  const router = useRouter();

  return (
    <Container>
      <Flex
        width="100%"
        mt={{ xs: "2rem", sm: "4rem" }}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column-reverse", sm: "row" }}
      >
        <Box>
          <Text
            as="h1"
            fontSize="3.3rem"
            fontWeight="500"
            py="0.5rem"
            sx={{ wordSpacing: "-0.5rem" }}
          >
            Prepare for Interviews
          </Text>
          <Text as="p" mt="1rem" fontSize="1.7rem">
            Share solve learn
          </Text>
          <Flex mt="1.5rem">
            <Button
              fontSize={{ xs: "1.5rem", sm: "1.2rem" }}
              onClick={() => router.push("/signup")}
            >
              Sign up
            </Button>
            <Button
              fontSize={{ xs: "1.5rem", sm: "1.2rem" }}
              onClick={() => router.push("/questions")}
              ml="1.5rem"
            >
              All questions
            </Button>
          </Flex>
          <Flex mt="3.5rem" alignItems="center">
            <Text mr="1rem">Scroll down to know more</Text>
            <Animation lotti={mouse} width="2rem" />
          </Flex>
        </Box>
        <Box
          width={{ xs: "20rem", sm: "35rem" }}
          css={css`
            animation: ${rotate} 5s linear infinite;
          `}
        >
          <Animation lotti={data} height={"auto"} />
        </Box>
      </Flex>
    </Container>
  );
}

export default Hero;
