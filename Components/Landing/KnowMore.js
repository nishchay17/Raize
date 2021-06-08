import React from "react";
import { Flex, Text, Box } from "rebass";
import Container from "../Common/Container";

const Card = ({ title, text }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bg="blue"
      color="white"
      flex={1}
      p="1.5rem"
      sx={{
        borderRadius: "5px",
        boxShadow: "8px 8px 13px #d0d0d0, -8px -8px 13px #f0f0f0",
      }}
    >
      <Text
        as="h2"
        fontFamily="Dancing Script"
        fontSize="2rem"
        fontWeight="500"
        mb="1rem"
      >
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
    <Box bg="bg" pt="2rem" pb="3rem">
      <Container mt={{ xs: 0, sm: 0 }}>
        <Flex>
          <Box width="100%">
            <Text
              mb="2rem"
              textAlign="center"
              fontSize={{ xs: "2rem", sm: "2.5rem" }}
              fontWeight="500"
            >
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
                text="Make a account and start sharing questions to help others."
              />
              <Card
                title="Solve"
                text="Solve more and more questions, and bookmark them for future reference."
              />
              <Card
                title="Learn"
                text="Learn by solving question and ace the interview."
              />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default KnowMore;
