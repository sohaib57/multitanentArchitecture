import { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";

const SignUp = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      window.location.assign("http://localhost:3000/");
    }
  });
  return (
    <Stack p={"5"}>
      <Stack
        mt={"0 !important"}
        alignSelf={"center"}
        bgColor="rgba(0,0,0,.75)"
        w={{ base: "95%", md: "50%", xl: "35%" }}
        minH="450px"
        borderRadius={"4px"}
        p={{ base: "8", md: "16" }}
      >
        <Heading fontSize={"32px"} fontWeight={"700"} color={"white"}>
          Sign In
        </Heading>
        <Stack spacing={"3"} py={"4"}>
          <Input
            fontSize={"md"}
            color="white"
            border={"none"}
            bgColor={"#333"}
            size={"lg"}
            placeholder="Email or phone number"
          />
          <Input
            type={"password"}
            fontSize={"md"}
            color="white"
            border={"none"}
            bgColor={"#333"}
            size={"lg"}
            placeholder="Password"
          />
        </Stack>
        <Button
          fontSize={"md"}
          _hover={{}}
          color="white"
          fontWeight={"700"}
          mt={"5 !important"}
          size={"lg"}
          bg="red"
          onClick={() => setClicked(true)}
        >
          Sign In
        </Button>
        <HStack
          color={"#b3b3b3"}
          fontSize="sm"
          justifyContent={"space-between"}
        >
          <Checkbox colorScheme={"gray"} size={"md"} defaultChecked>
            <Text fontSize="sm">Remember me</Text>
          </Checkbox>
          <Link>Need help?</Link>
        </HStack>
        <Stack spacing={"3"} mt={"24 !important"}>
          <Text color={"#737373"}>
            New to Webapp?{" "}
            <chakra.span
              color={"white"}
              fontWeight="400"
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Sign up now
            </chakra.span>
          </Text>
          <Text fontSize={"13px"} color={"#8c8c8c"}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <chakra.span color={"#0071eb"} _hover={{ cursor: "pointer" }}>
              Learn more
            </chakra.span>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignUp;
