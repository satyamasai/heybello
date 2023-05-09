import React, { useEffect, useRef, useState } from "react";
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
  Box,
  Flex,
  Select,
} from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GET_ALL_CART_ITEMS, DELETE_CART_ITEM } from "../../Utils/url.js";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [count,setCount]= useState(null)
// let count=useRef();
  //----## getting cart items of user----///####-----
  const hbToken = JSON.parse(localStorage.getItem("hbToken"));
  console.log("first");
  useEffect(() => {
    const getcartItems = async (count) => {
      axios
        .get(`${GET_ALL_CART_ITEMS}`, {
          headers: {
            Authorization: `Bearer ${hbToken}`,
          },
        })
        .then((res) => {
          setCartItems(res.data.cart);
          setCount(res.data.cart.length)
          // count.current=res.data.cart.length;
          console.log(count,"count");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getcartItems();
  },[hbToken,count]);

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
        {hbToken && <div className="cart_count">{count}</div>}{" "}
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
            {cartItems.map((item, index) => (
              <Box
                key={index}
                mt={"4px"}
                boxSizing="border-box"
                w={"99%"}
                border={"1px solid goldenrod"}
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
                  >
                    {item.product_details.name}-{item.product_details.brand}-{" "}
                    {item.product_details.product_type}
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
            <Link to="/checkout"> <Button onClick={onClose} colorScheme="blue">
            Proceed
           
            </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
