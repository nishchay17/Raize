import React from "react";
import { Flex, Text } from "rebass";
import Container from "../Common/Container";

const Card = ({ title }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bg="primary"
      width={{ xs: "100%", sm: "30%" }}
      flexShrink={0}
      p="1.5rem"
      mb={{ xs: "1rem", sm: 0 }}
      sx={{
        borderRadius: "5px",
        backgroundColor: "primary",
        backgroundImage: "url('/svg/Pattern-Randomized.svg')",
        backgroundSize: "cover",
        transition: "0.3s all",
        ":hover": {
          transform: "scale(1.01)",
        },
      }}
    >
      <Text as="h2" fontSize="1.5rem" fontWeight="500" my="0.5rem">
        {title}
      </Text>
    </Flex>
  );
};

function Categories() {
  return (
    <Container>
      <Flex flexDirection="column" minHeight="85vh">
        <Text
          my={{ xs: "2rem", sm: "4rem" }}
          textAlign="center"
          fontSize="2.2rem"
          fontWeight="500"
        >
          All Categories
        </Text>
        <Flex
          flexDirection={{ xs: "column", sm: "row" }}
          flexWrap="wrap"
          alignItems="stretch"
          sx={{ gap: ["", "", "2rem"] }}
        >
          <Card title="Javascript" />
          <Card title="C++" />
          <Card title="Python" />
          <Card title="React" />
          <Card title="Node" />
        </Flex>
      </Flex>
    </Container>
  );
}

export default Categories;
