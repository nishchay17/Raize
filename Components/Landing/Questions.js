import React from "react";
import { Box, Flex, Text } from "rebass";
import Container from "../Common/Container";
import { useRouter } from "next/router";

const Card = ({ slug, tags }) => {
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
      bg="darkBlue"
      p="1.5rem"
      my="2rem"
      sx={{
        borderRadius: "9px",
        opacity: 0.9,
        cursor: "pointer",
        ":hover": { opacity: 1 },
      }}
      width="100%"
      flexDirection="column"
      justifyContent="space-between"
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
};

function Questions() {
  const router = useRouter();

  return (
    <Container mt="7rem">
      <Flex alignItems="center" justifyContent="space-between">
        <Text as="h2" fontSize="2.2rem" fontWeight="500">
          Top <Box as="br" display={{ xs: "block", sm: "none" }} /> Questions
        </Text>
        <Text
          fontSize="1.2rem"
          color="primary"
          sx={{ cursor: "pointer" }}
          onClick={() => router.push("/questions")}
        >
          See all
        </Text>
      </Flex>
      <Box>
        <Card slug="Aedb eoi d inwone d nowiedn" />
        <Card slug="Aedb eoi d inwone d nowiedn" />
        <Card slug="Aedb eoi d inwone d nowiedn" />
        <Card slug="Aedb eoi d inwone d nowiedn" />
      </Box>
    </Container>
  );
}

export default Questions;
