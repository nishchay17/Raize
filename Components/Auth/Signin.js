import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Image } from "rebass";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useUser } from "../../redux/UserSlice";
import Container from "../Common/Container";
import Button from "../Common/Button";
import Input from "../Form/Input";
import Card from "../Common/Card";
import Auth from "../../services/Auth";

function Signin() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userDispatch, userState } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (userState.isLoggedIn) {
      router.push("/");
    }
  }, [userState]);

  const login = async (data) => {
    setError("");
    setIsLoading(true);
    const res = await Auth.login(data);
    if (res) {
      userDispatch.loginUser(res);
      router.push("/");
    }
    setIsLoading(false);
  };

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
            <Box as="form" onSubmit={handleSubmit(login)}>
              <Input
                label="Email"
                {...register("email", { required: "This field is required" })}
                errors={errors}
              />
              <Input
                error={error}
                label="Password"
                type="password"
                errors={errors}
                {...register("password", {
                  required: "This field is required",
                })}
              />
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
                disabled={isLoading}
                type="submit"
                mt="1.5rem"
                fontSize={{ xs: "1.5rem", sm: "1.2rem" }}
                mb={{ xs: "2rem", sm: 0 }}
              >
                Sign in
              </Button>
            </Box>
          </Box>
        </Card>
      </Flex>
    </Container>
  );
}

export default Signin;
