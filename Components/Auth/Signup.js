import React from "react";
import { Flex, Text, Box, Image, Card } from "rebass";
import Container from "../Common/Container";
import Input from "../Form/Input";
import Button from "../Common/Button";
import Link from "next/link";

function Signup() {
  return (
    <Container minHeight="85vh">
      <Flex
        mt={{ xs: "2rem", sm: "5rem" }}
        justifyContent="space-between"
        flexDirection={{ xs: "column-reverse", sm: "row" }}
      >
        <Card variant="card">
          <Box>
            <Box mb="3rem" mt={{ xs: "2rem", sm: 0 }}>
              <Text fontSize={{ xs: "1.2rem", sm: "0.9rem" }}>
                Already a user? Signin{" "}
                <Link href="/signin">
                  <Text
                    as="a"
                    display="inline"
                    color="purple"
                    sx={{ cursor: "pointer" }}
                  >
                    here
                  </Text>
                </Link>
              </Text>
              <Text
                fontSize={{ xs: "2.2rem", sm: "1.7rem" }}
                my={{ xs: "1rem", sm: "0.5rem" }}
              >
                Get started
              </Text>
              <Text fontSize={{ xs: "1.2rem", sm: "0.9rem" }}>
                Enter your basic info
              </Text>
            </Box>

            <Flex flexDirection={{ xs: "column", sm: "row" }}>
              <Box>
                <Input label="Username" />
                <Input label="Email" type="email" />
              </Box>
              <Box ml={{ xs: 0, sm: "4rem" }}>
                <Input label="Password" type="password" />
                <Input label="Re Enter Password" />
              </Box>
            </Flex>
            <Button
              mt="0.5rem"
              mb={{ xs: "2rem", sm: 0 }}
              fontSize={{ xs: "1.5rem", sm: "1.2rem" }}
            >
              Sign up
            </Button>
          </Box>
        </Card>
      </Flex>
    </Container>
  );
}

export default Signup;
