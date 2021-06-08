import React from "react";
import { Flex, Text, Box } from "rebass";
import Container from "../Common/Container";
import { BiFilterAlt } from "react-icons/bi";

function QuestionCard({ question, category, author }) {
  const Tag = ({ name }) => {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="lightBlue"
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
      bg="bg"
      sx={{ borderRadius: "5px", cursor: "pointer" }}
      flexDirection="column"
    >
      <Text fontSize="1.5rem" fontWeight="500" mb="2rem">
        {question}
      </Text>
      <Text>{author.name}</Text>
      <Flex sx={{ flexWrap: "wrap" }}>
        {category.map((name) => (
          <Tag name={name} />
        ))}
      </Flex>
    </Flex>
  );
}

function QuestionLayout({ questions }) {
  return (
    <Container>
      <Flex flexDirection="column">
        <Text
          my={{ xs: "2rem", sm: "4rem" }}
          textAlign="center"
          fontSize="2.5rem"
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
              bg="blue"
              color="white"
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
            {questions.map((data) => (
              <QuestionCard {...data} key={data._id} />
            ))}
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}

QuestionLayout.defaultProps = {
  questions: [],
};

export default QuestionLayout;
