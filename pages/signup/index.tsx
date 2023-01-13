import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  function moveToDashboard() {
    router.push("/dashboard");
  }

  return (
    <Box>
      <Box
        maxWidth={"400px"}
        margin={"20vh auto 10px"}
        border={"1px solid grey"}
        p={"0px 40px 80px"}
        borderRadius={"20px"}
      >
        <Text mt={"30px"} fontSize={"20px"} color={"grey"}>
          SignUp
        </Text>
        <Input mt={"40px"} placeholder={"Name"} />
        <Input my={"40px"} placeholder={"Email"} />
        <Input mb={"40px"} placeholder={"Password"} type={"password"} />
        <Button width={"100%"} onClick={moveToDashboard}>
          SignUp
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
