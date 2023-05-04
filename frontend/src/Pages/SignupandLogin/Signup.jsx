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
  useToast,
} from "@chakra-ui/react";
import { Link as ReactRouter, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";


export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState("");
  const toast= useToast()
 const navigate= useNavigate()
  // ------------handle signup----------------
  const handleSignup = () => {
    if (fname && mobile && email && password) {
      setLoading(true);
      const userData = {
        name: fname + " " + lname,
        email,
        password,
        mobile,
      };
      console.log(userData);
      axios
        .post("https://hbserver-ous1.onrender.com/signup", userData)
        .then((res) => {
          setLoading(false);
          console.log("success user");
          toast({
            title: res.data.status,
            description:  res.data.message,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          navigate("/login")
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: err.data.msg,
            description: "Error",
            status: err.data.status,
            duration: 4000,
            isClosable: true,
          })
          setLoading(false);
        });

      setFname("");
      setLname("");
      setEmail("");
      setMobile("");
      setPassword("");
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
      <Stack
        color={"goldenrod"}
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
      >
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
                    outline={"goldenrod"}
                    border={"1px solid goldenrod"}
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
                    border={"1px solid goldenrod"}
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
                border={"1px solid goldenrod"}
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
                border={"1px solid goldenrod"}
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
                  border={"1px solid goldenrod"}
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
              { !loading ? (
                <Button
                  onClick={handleSignup}
                  // loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              ) : (
                <Button
                  isLoading
                  loadingText="Signing up.."
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  
                </Button>
              )}
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
