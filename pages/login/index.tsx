import { Box, Button, Input, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Span = styled.span`
  text-decoration: underline;
`;

const Index = () => {
  const router = useRouter();

  function signUp() {
    router.push("/signup");
  }
  function moveToDashboard() {
    router.push("/dashboard");
  }

  return (
    <Box>
      <Box
        maxWidth={"400px"}
        margin={"20vh auto 10px"}
        border={"1px solid grey"}
        p={"0px 40px 0px"}
        borderRadius={"20px"}
      >
        <Text mt={"30px"} fontSize={"20px"} color={"grey"}>
          Login
        </Text>
        <Input mt={"40px"} placeholder={"Name"} />
        <Input my={"40px"} placeholder={"Email"} />
        <Input mb={"40px"} placeholder={"Password"} type={"password"} />
        <Button width={"100%"} onClick={moveToDashboard}>
          Login
        </Button>
        <Text m={"20px auto 80px"} fontSize={"12px"} textAlign={"center"}>
          New user?{" "}
          <Span onClick={signUp} className={"pointer"}>
            Signup here{" "}
          </Span>
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
