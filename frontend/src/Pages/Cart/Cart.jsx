import React from "react";
import "./Cart.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Flex,
  Select,
} from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  return (
    <>
      <Button m={"5px"} ref={btnRef} onClick={onOpen}>
        <FaCartPlus />
      </Button>

      <Drawer
       
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      
      >
        <DrawerOverlay />
        <DrawerContent className="drawer_content">
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody className="drawer_body">
            {cartItems?.map((item) => (
              <Box
                mt={'4px'}
                boxSizing="border-box"
                w={"99%"}
                border={"1px solid goldenrod"}
                h={"150px"}
              >
                <Flex h={"70%"} border={""}>
                  <img
                    src={item.api_featured_image}
                    alt="product_image"
                    width={"100px"}
                    height={"80px"}
                  />

                  <Flex
                    p={"3px"}
                    justify={"space-between"}
                    m={"auto"}
                    h={"75%"}
                    border={""}
                  >
                    {item.name}-{item.brand}- {item.product_type}
                  </Flex>
                </Flex>
                <Flex
                  h={"30%"}
                  border={""}
                  justify={"space-between"}
                  alignItems={"center"}
                  textAlign={"center"}
                >
                  <Flex
                    p={"3px"}
                    justify={"space-between"}
                    w={"55%"}
                    alignItems={"center"}
                    border={""}
                  >
                    Quantity :
                    <Select outline={"0"} border={"none"} w={"42%"}>
                      <option outline={"0"} value="1">
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Select>{" "}
                  </Flex>
                  <Box>$ {item.price}</Box>
                  <Box>
                    <MdDelete />
                  </Box>
                </Flex>
              </Box>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Proceed</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
