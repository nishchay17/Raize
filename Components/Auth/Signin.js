import React from "react";
import { Flex, Box, Text, Image } from "rebass";
import Button from "../Common/Button";
import Container from "../Common/Container";
import Input from "../Form/Input";
import Link from "next/link";
import Card from "../Common/Card";

function Signin() {
  return (
    <Container minHeight="80vh">
      <Flex
        mt={{ xs: "2rem", sm: "5rem" }}
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection={{ xs: "column-reverse", sm: "row" }}
      >
        <Image src="/svg/peep-22.svg" />
        <Card bg="bg" width={{ xs: "100%", sm: "50%" }}>
          <Box width={{ xs: "100%", sm: "auto" }}>
            <Text
              mt={{ xs: "2rem", sm: 0 }}
              as="h2"
              fontWeight="400"
              fontSize={{ xs: "2.2rem", sm: "1.7rem" }}
              mb="1.7rem"
            >
              Login here
            </Text>
            <Input label="Username" />
            <Input label="Password" type="password" />
            <Link href="forgot-password">
              <Text
                as="a"
                color="blue"
                fontSize={{ xs: "1.2rem", sm: "0.9rem" }}
                sx={{ cursor: "pointer" }}
              >
                Forgot Password
              </Text>
            </Link>
            <Text fontSize={{ xs: "1.2rem", sm: "0.9rem" }}>
              New user? Get started{" "}
              <Link href="/signup">
                <Text
                  as="a"
                  color="blue"
                  sx={{ cursor: "pointer" }}
                  display="inline"
                >
                  here
                </Text>
              </Link>
            </Text>
            <Button
              mt="1.5rem"
              fontSize={{ xs: "1.5rem", sm: "1.2rem" }}
              mb={{ xs: "2rem", sm: 0 }}
            >
              Sign in
            </Button>
          </Box>
        </Card>
      </Flex>
    </Container>
  );
}

export default Signin;
