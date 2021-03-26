import React from "react";
import { Flex, Box, Text, Image } from "rebass";
import Button from "../Common/Button";
import Container from "../Common/Container";
import Input from "../Form/Input";
import Link from "next/link";

function Signin() {
  return (
    <Container minHeight="85vh">
      <Flex
        mt={{ xs: "2rem", sm: "7rem" }}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column-reverse", sm: "row" }}
      >
        <Box width={{ xs: "100%", sm: "auto" }}>
          <Text
            mt={{ xs: "2rem", sm: 0 }}
            as="h2"
            fontWeight="400"
            fontSize={{ xs: "2.2rem", sm: "1.7rem" }}
            mb="2rem"
          >
            Login here
          </Text>
          <Input label="Email" />
          <Input label="Password" type="password" />
          <Link href="forgot-password">
            <Text
              as="a"
              color="purple"
              fontSize={{ xs: "1.2rem", sm: "0.9rem" }}
              sx={{ cursor: "pointer" }}
            >
              Forgot Password
            </Text>
          </Link>
          <Text mt="0.5rem" fontSize={{ xs: "1.2rem", sm: "0.9rem" }}>
            New user? Get started{" "}
            <Link href="/signup">
              <Text
                as="a"
                color="purple"
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
        <Image
          src="/svg/signin.svg"
          width={{ xs: "15rem", sm: "30rem" }}
          mr={{ xs: 0, sm: "10rem" }}
        />
      </Flex>
    </Container>
  );
}

export default Signin;
