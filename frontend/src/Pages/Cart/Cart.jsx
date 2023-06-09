import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
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
  Box,
  Flex,
  Select,
  useToast,
} from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GET_ALL_CART_ITEMS, DELETE_CART_ITEM } from "../../Utils/url.js";
import axios from "axios";
import { Link } from "react-router-dom";
import { getcartItems } from "../../Redux/App/appactions";
export default function Cart({ bnbrender }) {
  // console.log(bnbrender,'atcart')
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [count, setCount] = useState(null);
  const [render, setRender] = useState(true);
  const toast = useToast();

  //----## getting cart items of user----///####-----
  const hbToken = JSON.parse(localStorage.getItem("hbToken"));
  const cart = useSelector((store) => store.cart);
  console.log(cart.cart, "cart");

  useEffect(() => {
    getcartItems(dispatch);
  }, [dispatch]);

  // -----handle delete---####////

  const handleDeleteItem = (id) => {
    const hbToken = JSON.parse(localStorage.getItem("hbToken")) || null;

    axios
      .delete(`${DELETE_CART_ITEM}/${id}`, {
        headers: {
          Authorization: `Bearer ${hbToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        getcartItems(dispatch);

        toast({
          title: `Item deleted`,
          position: "top-left",
          isClosable: true,
          status: "error",
        });
        setRender(!render);
        // window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button m={"5px"} ref={btnRef} onClick={onOpen}>
        <FaCartPlus />
        {hbToken && <div className="cart_count">{cart.cart?.length}</div>}{" "}
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
            {cart.cart?.map((item, index) => (
              <Box
                key={index}
                mt={"4px"}
                boxSizing="border-box"
                w={"99%"}
                border={"1px solid pink"}
                h={"150px"}
              >
                <Flex h={"70%"} border={""}>
                  <img
                    src={item.product_details.api_featured_image}
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
                    fontSize={"12px"}
                  >
                    {item.product_details.name}-{item.product_details.brand}-{" "}
                    {item.product_details.product_type}
                  </Flex>
                </Flex>
                <Flex
                  h={"30%"}
                  border={"0px solid red"}
                  justify={"space-around"}
                  alignItems={"center"}
                  textAlign={"center"}
                >
                  <Flex
                    p={"3px"}
                    justify={"space-between"}
                    w={"40%"}
                    alignItems={"center"}
                    border={"0px solid red"}
                  >
                    Qty :
                    <Select outline={"0"} border={"none"} w={"62%"}>
                      <option outline={"0"} value="1">
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Select>{" "}
                  </Flex>
                  <Box>$ {item.product_details.price}</Box>
                  <Box>
                    <MdDelete onClick={() => handleDeleteItem(item.id)} />
                  </Box>
                </Flex>
              </Box>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Link to="/checkout">
              {" "}
              <Button onClick={onClose} colorScheme="blue">
                Proceed
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
