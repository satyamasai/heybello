import { useState } from "react";
import mybellalogo from "./mybellalogo.jpg";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { Link as ReactRouter } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
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
  { label: "Login", path: "/login" },
  { label: "Signup", path: "/signup" },
];

export default function Navbar() {
  const [down, setDown] = useBoolean(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const heyBelloLoginToken = false;
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleMouseOver = () => {
    setIsBoxVisible(true);
  };

  const handleMouseOut = () => {
    setIsBoxVisible(false);
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box bg={""}>
            <a href="/">
              <img className="logo_img" src={mybellalogo} alt="logo" />{" "}
            </a>
          </Box>

          <Flex w="40%" justifyContent={"space-around"}>
            <div className="category_nav_box">
              <Box
                color={"goldenrod"}
                justifyContent={"space-around"}
                border="1px"
                borderColor="grey.400"
                w={'35rem'}
                h={'50px'}
                display={{ base: "none", sm: "none", md: "flex" }}
                 textAlign={'center'}
                 alignItems={'center'}
                >
                {links.map((link,index) => (
                  <ReactRouter key={index} m="5px" to={link.path}>
                    {link.label }
                  </ReactRouter>
                ))}
              </Box>
              <Box display={{ md: "none" }}>
                {!down ? (
                  <IconButton
                    onClick={setDown.on}
                    icon={<TriangleDownIcon />}
                  />
                ) : (
                  <IconButton onClick={setDown.off} icon={<TriangleUpIcon />} />
                )}
                {down && (
                  <Flex
                    pos="absolute"
                    top="70"
                    left={0}
                    w={"100vw"}
                    bg={"tomato"}
                    direction={"column"}
                    zIndex={20}
                    className="nav_dropdownmenu"
                  >
                    {links.map((link) => (
                      <Link
                        onClick={setDown.off}
                        as={ReactRouter}
                        to={link.path}
                        m="10px"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Flex>
                )}
              </Box>
            </div>
          </Flex>

          <Flex bg={""} alignItems={"center"}>
            <Cart />
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                {heyBelloLoginToken ? (
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
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCSy6Nfn8qEh-1dav0-l6A4TXudU6xzfTvMVZEWegjA&usqp=CAU&ec=48665698"
                      }
                    />
                  </MenuButton>
                ) : (
                  <Box display={{ sm: "none", base: "none" }}>
                    <ReactRouter to="/login">
                      <Button>Login</Button>
                    </ReactRouter>

                    <ReactRouter to="/signup">
                      <Button> Signup </Button>
                    </ReactRouter>
                  </Box>
                )}

                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCSy6Nfn8qEh-1dav0-l6A4TXudU6xzfTvMVZEWegjA&usqp=CAU&ec=48665698"
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
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
