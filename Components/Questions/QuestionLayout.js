import React from "react";
import { Flex, Text, Box } from "rebass";
import Container from "../Common/Container";
import { BiFilterAlt } from "react-icons/bi";

function QuestionCard({ slug }) {
  const Tag = ({ name }) => {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="primary"
        p="0.2rem 0.5rem"
        mr="1rem"
        mt="1rem"
        fontSize="0.9rem"
        sx={{ borderRadius: "5px" }}
      >
        {name}
      </Flex>
    );
  };

  return (
    <Flex
      width="100%"
      p="1.5rem"
      mb="1rem"
      bg="darkBlue"
      sx={{ borderRadius: "5px" }}
      flexDirection="column"
    >
      <Text fontSize="1.5rem" fontWeight="500" mb="2rem">
        {slug}
      </Text>
      <Text>@Nishchay17</Text>
      <Flex sx={{ flexWrap: "wrap" }}>
        <Tag name="Javascript" />
        <Tag name="Javascript" />
        <Tag name="Javascript" />
        <Tag name="Javascript" />
        <Tag name="Javascript" />
        <Tag name="Javascript" />
      </Flex>
    </Flex>
  );
}

function QuestionLayout() {
  return (
    <Container>
      <Flex flexDirection="column">
        <Text
          my={{ xs: "2rem", sm: "4rem" }}
          textAlign="center"
          fontSize="2.2rem"
          fontWeight="500"
        >
          Questions
        </Text>
        <Flex sx={{ gap: "2rem" }} flexDirection={{ xs: "column", sm: "row" }}>
          <Flex
            alignItems="flex-start"
            flex={1}
            height="fit-content"
            sx={{ position: "sticky", top: ["", "2vh", "5vh"] }}
          >
            <Box
              width="100%"
              height="auto"
              sx={{ borderRadius: "5px" }}
              bg="primary"
              p="1.5rem"
            >
              <Flex
                width="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text fontSize="1.2rem" fontWeight="600">
                  Filter
                </Text>
                <Box as={BiFilterAlt} size="1.5rem" />
              </Flex>
            </Box>
          </Flex>
          <Box flex={2}>
            {Array(5)
              .fill()
              .map(() => (
                <QuestionCard slug="Hihdweq iohdw dn" />
              ))}
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}

export default QuestionLayout;
