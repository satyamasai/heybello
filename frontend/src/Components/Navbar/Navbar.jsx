import { useState } from "react";
import mybellalogo from "./mybellalogo.jpg";
import heybellologo from "../../Photo/heybellologo.jpg"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { Navigate, Link as ReactRouter, useNavigate } from "react-router-dom";
import { FaTimes,FaAlignLeft } from "react-icons/fa";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import Cart from "../../Pages/Cart/Cart";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

// ------------------links-------------
const links = [
  { label: "Categories", path: "/categories" },
  { label: "Brands", path: "/brands" },
  { label: "Luxe", path: "/luxe" },
  { label: "Fashion", path: "/fashion" },
  { label: "Beauty Advise", path: "/beautiadvise" },
];

export default function Navbar() {
  const [down, setDown] = useBoolean(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const heyBelloLoginToken = false;
  const [isBoxVisible, setIsBoxVisible] = useState(false);
const navigate= useNavigate()
  const hbToken = JSON.parse(localStorage.getItem("hbToken")) || null;

  const handleMouseOver = () => {
    setIsBoxVisible(true);
  };

  const handleMouseOut = () => {
    setIsBoxVisible(false);
  };

  const handleLogout=()=>{
    localStorage.setItem("hbToken",null);
    navigate("/")
  }

  return (
    
      <Box   bg={useColorModeValue("gray.100", "gray.900")} px={1}>
        <Flex w={'100%'} border={'0px solid red'} h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box className="hamburger" display={{ md: "none" }} >
        {!down ? (
          <IconButton
            onClick={setDown.on}
            icon={<FaAlignLeft />}
          />
        ) : (
          <IconButton onClick={setDown.off} icon={<FaTimes/>} />
        )}
        {down && (
          <Flex
            pos="absolute"
            top="65px"
            left={0}
            w={"100vw"}
            bg={"pink"}
            direction={"column"}
            zIndex={20}
            className="nav_dropdownmenu"
            p={"5px"}
          >
            {links.map((link) => (
              <Link
                onClick={setDown.off}
                as={ReactRouter}
                to={link.path}
                m="8px"
                width={"140px"}
                borderBottom={"2px solid white"}
                alignSelf={"center"}
                fontWeight={"bolder"}
              >
                {link.label}
              </Link>
            ))}
              {!hbToken ? (
                <Box
                  display={"flex"}
                  justifyContent={"space-around"}
                  m={"auto"}
                  textAlign={"center"}
                  w={"240px"}
                  h={"40px"}
                  border={"0px solid red"}
                  alignItems={"center"}
                >
                  <Button  colorScheme="pink" size={"sm"}>
                   <a href="/login">
                   Login
                   </a>
                  </Button>{" "}
                  <Button colorScheme="pink" size={"sm"}>
                  <a href="/signup">
                  Signup
                  </a>
                  </Button>
                </Box>
            ) : (
              <Button omClick={handleLogout}  m={"auto"} w={"180px"} colorScheme="red">
                Logout
              </Button>
            )}
          </Flex>
        )}
      </Box> 
        <Box bg={""}>
            <a href="/">
              <img className="logo_img" src={heybellologo} alt="logo" />{" "}
            </a>
          </Box>

          <Flex w="40%" justifyContent={"space-around"}>
            <div className="category_nav_box">
              <Box
                color={"pink.400"}
                justifyContent={"space-around"}
                border="1px"
                borderColor="grey.400"
                w={"28rem"}
                h={"40px"}
                display={{ base: "none", sm: "none", md: "flex" }}
                textAlign={"center"}
                alignItems={"center"}
              >
                {links.map((link, index) => (
                  <ReactRouter className="navbar_links" key={index} m="3px" to={link.path}>
                    {link.label}
                  </ReactRouter>
                ))}
                
          
              </Box>
            
            
            </div>
          </Flex>

          <Flex bg={""} alignItems={"center"}>
            <Cart  />
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                {hbToken ? (
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        "https://news.harvard.edu/wp-content/uploads/2014/10/hello-kitty-wallpaper-37_605.jpg"
                      }
                    />
                  </MenuButton>
                ) : (
                  <Box display={{ sm: "none", base: "none" ,md:"flex"}}>
                    <ReactRouter to="/login">
                      Login
                    </ReactRouter>
/
                    <ReactRouter to="/signup">
                       Signup 
                    </ReactRouter>
                  </Box>
                )}

                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://news.harvard.edu/wp-content/uploads/2014/10/hello-kitty-wallpaper-37_605.jpg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    
  );
}
