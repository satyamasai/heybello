import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { Link as ReactRouter } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState("");

  // ------------handle signup----------------
  const handleSignup = () => {
    if (fname && mobile && email && password) {
      const userData = {
        name: fname + " " + lname,
        email,
        password,
        mobile,
      };
      console.log(userData);
      axios
        .post("http://localhost:8080/signup", userData)
        .then((res) => {
          console.log("success user");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

        setFname("")
        setLname("")
        setEmail("")
        setMobile("")
        setPassword("")
    } else {
      alert("please fill all the details correctly...!");
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool products ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                  value={fname}
                    isRequired={true}
                    type="text"
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                  value={lname}
                    type="text"
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
              value={email}
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile</FormLabel>
              <Input
              value={mobile}
                type="mobile"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSignup}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <ReactRouter to="/login" color={"blue.400"}>
                  Login
                </ReactRouter>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
