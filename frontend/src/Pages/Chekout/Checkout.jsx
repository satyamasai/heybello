import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { Box, Flex, Select, useDisclosure } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { GET_ALL_CART_ITEMS, DELETE_CART_ITEM } from "../../Utils/url.js";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  let quantities = [1, 2, 3, 4];
  //----## getting cart items of user----///####-----
  const hbToken = JSON.parse(localStorage.getItem("hbToken"));

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
          console.log(cartItems);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getcartItems();
  }, [hbToken]);

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
    <div className="checkout">
      <Box
        display={{ md: "flex" }}
        w={"90%"}
        h={"auto"}
        m={"auto"}
        border={"2px solid red"}
        p={"20px"}
        justifyContent={"space-between"}
      >
        <Box
          m={"auto"}
          width={{ base: "90%", sm: "90%", md: "50%" }}
          h={"auto"}
          border={"2px solid blue"}
        >
          {cartItems.map((item, index) => (
            <Box
              className="cart_card"
              key={index}
              mt={"4px"}
              boxSizing="border-box"
              w={"99%"}
              border={"1px solid goldenrod"}
              h={"150px"}
              p={"10px"}
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
                  fontSize={{ base: "10px", sm: "12px", md: "18px" }}
                >
                  {item.product_details.name}-{item.product_details.brand}-{" "}
                  {item.product_details.product_type}
                </Flex>
              </Flex>
              <Flex
                h={"30%"}
                border={"0px solid black"}
                justify={"space-between"}
                alignItems={"center"}
                textAlign={"center"}
              >
                <Flex
                  p={"2px"}
                  boxSizing="border-box"
                  justify={"space-between"}
                  w={{ sm: "100px", md: "100px" }}
                  alignItems={"center"}
                  border={"0px solid black"}
                >
                  <p style={{ border: "0px solid blue" }}>Qty :</p>
                  <Select
                    padding={"2px"}
                    w={"50px"}
                    placeholder={item.quantity}
                    outline={"0"}
                    border={"0px solid red"}
                    size={"xsm"}
                  >
                    {quantities.map((qty) => (
                      <option outline={"0"} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </Select>{" "}
                </Flex>
                <Box>$ {item.product_details.price}</Box>
                <Box>
                  <MdDelete onClick={() => handleDeleteItem(item.id)} />
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>
        <Box w={"40%"} h={"500px"} border={"1px solid green"}></Box>
      </Box>
    </div>
  );
};

export default Checkout;
