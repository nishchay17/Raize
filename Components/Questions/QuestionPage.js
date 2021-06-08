import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { Box, Flex, Text } from "rebass";

import { URL } from "../../api";
import Card from "../Common/Card";
import Code from "../Common/Code";
import Container from "../Common/Container";

function QuestionPage() {
  const router = useRouter();
  const id = router.query.id;
  const [question, setQuestion] = useState({});

  async function getData(id) {
    const res = await axios.get(`${URL}/question/public/${id}`);
    setQuestion(res.data.question[0]);
    console.log(res.data.question[0]);
  }

  useEffect(() => {
    id && getData(id);
  }, [id]);

  return (
    <Container minHeight="90vh" py="1.5rem">
      <Flex alignItems="center" mb="1.5rem" sx={{ userSelect: "none" }}>
        <Box color="blue" as={BiArrowBack} mr="0.5rem" />
        <Box as="a" color="blue" sx={{ cursor: "pointer" }}>
          Go back to all questions
        </Box>
      </Flex>
      <Card height="80vh">
        <Text as="p" fontSize="1.2rem" opacity="0.7">
          Question
        </Text>
        <Text as="p" fontSize="1.5rem" mt="0.5rem" mb="1rem">
          {question.question}
        </Text>
      </Card>
    </Container>
  );
}

export default QuestionPage;
