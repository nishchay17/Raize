import React from "react";
import { Box, Flex, Text } from "rebass";
import Container from "../Common/Container";
import { useRouter } from "next/router";

const Card = ({ createdByInfo, title, tags, author, onClick }) => {
  const Tag = ({ name }) => {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="lightBlue"
        color="dark"
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
      onClick={onClick}
      bg="bg"
      p="1.5rem"
      mt="2rem"
      width={{ xs: "100%", sm: "49%" }}
      sx={{
        borderRadius: "9px",
        cursor: "pointer",
        transition: "0.3s all",
        ":hover": {
          boxShadow: "1px 1px 10px #dcdcdc,-1px -1px 10px #e4e4e4",
        },
      }}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text fontSize="1.5rem" fontWeight="500" mb="2rem">
        {title}
      </Text>
      <Box>
        <Text>{createdByInfo ? "@" + createdByInfo.name : "Anonymous"}</Text>
        <Flex sx={{ flexWrap: "wrap" }}>
          {tags.map((tag, idx) => (
            <Tag name={tag} key={idx} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

function Questions({ topQuestions }) {
  const router = useRouter();

  return (
    <Container my={{ xs: "3rem", sm: "6rem" }}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text
          as="h2"
          fontSize={{ xs: "2rem", sm: "2.5rem" }}
          fontWeight="500"
          lineHeight="3rem"
        >
          Top <Box as="br" display={{ xs: "block", sm: "none" }} /> Questions
        </Text>
        <Text
          fontSize="1.2rem"
          color="blue"
          sx={{ cursor: "pointer" }}
          onClick={() => router.push("/questions")}
        >
          See all
        </Text>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {topQuestions.map((data) => (
          <Card
            key={data._id}
            {...data}
            onClick={() => router.push(`question/${data._id}`)}
          />
        ))}
      </Flex>
    </Container>
  );
}

Questions.defaultProps = {
  topQuestions: [],
};

export default Questions;
