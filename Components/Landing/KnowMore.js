import React from "react";
import { Flex, Text, Box } from "rebass";
import Container from "../Common/Container";

const Card = ({ title, text }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bg="primary"
      flex={1}
      p="1.5rem"
      sx={{
        borderRadius: "5px",
        backgroundColor: "primary",
        backgroundImage: "url('/svg/Pattern-Randomized.svg')",
        backgroundSize: "cover",
        transition: "0.3s all",
        ":hover": {
          transform: "scale(1.005)",
        },
      }}
    >
      <Text as="h2" fontSize="1.5rem" fontWeight="500" mb="1rem">
        {title}
      </Text>
      <Text as="p" lineHeight="1.5rem" textAlign="center">
        {text}
      </Text>
    </Flex>
  );
};

function KnowMore() {
  return (
    <Container mt={{ xs: "5rem", sm: "9rem" }} mb="4rem">
      <Flex>
        <Box width="100%">
          <Text mb="4rem" textAlign="center" fontSize="2.2rem" fontWeight="500">
            Know more
          </Text>
          <Flex
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="stretch"
            sx={{ gap: ["", "1rem", "2rem"] }}
          >
            <Card
              title="Share"
              text="Make a account, start sharing questions to help other."
            />
            <Card
              title="Solve"
              text="Solve more and more questions, they are MCQs this answer and explanation at the end."
            />
            <Card
              title="Learn"
              text="Learn by solving question and ace the interview."
            />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
}

export default KnowMore;
