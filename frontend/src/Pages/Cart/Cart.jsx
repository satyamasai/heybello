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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            {cartItems?.map((item) => (
              <Box w={"99%"} border={"1px solid goldenrod"} h={"150px"}>
                <Flex h={"70%"} border={""}>
                  <img
                    src={item.api_featured_image}
                    alt="product_image"
                    width={"100px"}
                    height={"80px"}
                  />

                  <Flex justify={"center"} m={"auto"} h={"80%"} border={""}>
                    {item.name}-{item.brand}- {item.product_type}
                  </Flex>
                </Flex>
                <Flex
                  h={"30%"}
                  border={"1px solid "}
                  justify={"space-around"}
                  alignItems={"center"}
                  textAlign={"center"}
                >
                  <Flex
                    justify={"space-between"}
                    w={"50%"}
                    alignItems={"center"}
                  >
                    Quantity :
                    <Select border={"none"} w={"45%"}>
                      <option value="1">1</option>
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
