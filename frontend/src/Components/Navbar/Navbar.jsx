import {  useState } from "react";
import mybellalogo from "./mybellalogo.jpg";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { Link as ReactRouter } from "react-router-dom"
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
const links = [{ label: "Categories", path: "/categories" },
{ label: "Blush", path: "/blush" },
{ label: "Bronzer", path: "/bronzer" },
{ label: "Eyebrow", path: "/eyebrow" },
{ label: "Eyeliner", path: "/eyeliner" },
{ label: "Eyeshadow", path: "/eyeshadow" },
{ label: "Foundation", path: "/foundation" },
{ label: "Lipliner", path: "/lipliner" },
{ label: "Lipstick", path: "/lipstick" },
];

export default function Navbar() {
  const [down, setDown] = useBoolean(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <img className="logo_img" src={mybellalogo} alt="logo" />{" "}
          </Box>

          <Flex w="40%" justifyContent={"space-around"}>
            <div className="category_nav_box">
              <Box w={500} display={{ base: "none", sm: "none", md: "block" }}>
                <div className="navbar">
                  <a href="#home">Home</a>
                  <div className="subnav">
                    <button className="subnavbtn">
                      About <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="subnav-content">
                      <a href="#company">Company</a>
                      <a href="#team">Team</a>
                      <a href="#careers">Careers</a>
                    </div>
                  </div>
                  <div className="subnav">
                    <button className="subnavbtn">
                      Services <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="subnav-content">
                      <a href="#bring">Bring</a>
                      <a href="#deliver">Deliver</a>
                      <a href="#package">Package</a>
                      <a href="#express">Express</a>
                    </div>
                  </div>
                  <div className="subnav">
                    <button className="subnavbtn">
                      Partners <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="subnav-content">
                      <a href="#link1">Link 1</a>
                      <a href="#link2">Link 2</a>
                      <a href="#link3">Link 3</a>
                      <a href="#link4">Link 4</a>
                    </div>
                  </div>
                  <a href="#contact">Contact</a>
                </div>
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
                    
                  >
                  {
                     links.map((link)=>(
                     <Link as={ReactRouter} to={link.path}  m="10px">{link.label}</Link>

                     ))


                  }
                  
                  
                  </Flex>
                )}
              </Box>
            </div>
          </Flex>

          <Flex bg={""} alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
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
