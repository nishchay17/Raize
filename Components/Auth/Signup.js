import React, { useEffect, useState } from "react";
import { Flex, Text, Box, Image } from "rebass";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import Container from "../Common/Container";
import Input from "../Form/Input";
import Button from "../Common/Button";
import Card from "../Common/Card";
import Auth from "../../services/Auth";
import { useUser } from "../../redux/UserSlice";

function Signup() {
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

  const signup = async (data) => {
    setError("");
    if (data.rePassword !== data.password) {
      setError("Password do not match");
      return;
    }
    setIsLoading(true);
    const res = await Auth.signup(data);
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
        <Image height="25rem" src="/svg/peep-standing-18.svg" />
        <Card bg="bg" width={{ xs: "100%", sm: "60%" }}>
          <Box as="form" onSubmit={handleSubmit(signup)}>
            <Box mb="2rem" mt={{ xs: "2rem", sm: 0 }}>
              <Text fontSize={{ xs: "1.2rem", sm: "0.9rem" }}>
                Already a user? Signin{" "}
                <Link href="/signin">
                  <Text
                    as="a"
                    display="inline"
                    color="blue"
                    sx={{ cursor: "pointer" }}
                  >
                    here
                  </Text>
                </Link>
              </Text>
              <Text
                fontSize={{ xs: "2.2rem", sm: "1.7rem" }}
                my={{ xs: "1rem", sm: "0.1rem" }}
              >
                Get started
              </Text>
              <Text fontSize={{ xs: "1.2rem", sm: "0.9rem" }}>
                Enter your basic info
              </Text>
            </Box>

            <Flex flexDirection={{ xs: "column", sm: "row" }}>
              <Box>
                <Input
                  label="Name"
                  errors={errors}
                  {...register("name", {
                    required: "This field is required",
                  })}
                />
                <Input
                  label="Email"
                  type="email"
                  errors={errors}
                  {...register("email", { required: "This field is required" })}
                />
              </Box>
              <Box ml={{ xs: 0, sm: "4rem" }}>
                <Input
                  label="Password"
                  type="password"
                  errors={errors}
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                <Input
                  label="Re Enter Password"
                  type="password"
                  errors={errors}
                  {...register("rePassword", {
                    required: "This field is required",
                  })}
                />
              </Box>
            </Flex>
            {error && (
              <Text mb="1rem" color="error">
                {error}
              </Text>
            )}
            <Button
              disabled={isLoading}
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
