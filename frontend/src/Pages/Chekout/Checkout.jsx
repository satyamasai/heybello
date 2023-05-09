import React, { useEffect, useState } from "react";
import "./Checkout.css";
import {
  Box,
  Button,
  CheckboxIcon,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { MdCheckCircleOutline, MdDelete, MdLocalOffer } from "react-icons/md";
import axios from "axios";
import { GET_ALL_CART_ITEMS, DELETE_CART_ITEM } from "../../Utils/url.js";

const Checkout = () => {
  const toast = useToast();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [render,setRender] = useState(true)
  //   const [totalAmount, setTotalAmount] = useState(0);
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
          console.log(res.data.cart);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getcartItems();
  }, [hbToken ,render]);

  //   --------------------set Total ammount-----------//

  let totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  console.log(totalAmount, "ta");

  // ---=-------------handle DELETE-----------####////

  const handleDeleteItem = (id) => {
   
    const hbToken = JSON.parse(localStorage.getItem("hbToken")) || null;
    setLoading(true);
    axios
      .delete(`${DELETE_CART_ITEM}/${id}`, {
        headers: {
          Authorization: `Bearer ${hbToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast({
          title: `Item deleted`,
          position: 'top-left',
          isClosable: true,
          status:'error'
        });
        setRender(!render)
        // window.location.reload()
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="checkout">
      <Box
        display={{ md: "flex" }}
        w={"90%"}
        h={"auto"}
        m={"auto"}
        border={"0px solid red"}
        p={"10px"}
        justifyContent={"space-between"}
      >
        <Box
          m={"auto"}
          width={{ base: "95%", sm: "90%", md: "50%" }}
          h={"auto"}
          border={"0px solid blue"}
        >
          {cartItems.map((item, index) => (
            <Box
              className="cart_card"
              key={index}
              mt={"4px"}
              boxSizing="border-box"
              w={"99%"}
              border={"1px solid pink"}
              h={"150px"}
              p={"10px"}
            >
              <Flex h={"70%"} border={""}>
                <img
                  className="card_img"
                  src={item.product_details.api_featured_image}
                  alt="product_image"
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
                    {quantities.map((qty, index) => (
                      <option key={index} outline={"0"} value={qty}>
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
        <Box className="payment_box" w={{ base: "90%", md: "50%" }} h={"500px"}>
          <Box className="payment_inner_div">
            <div>
              <h2>PAYMENT-DETAILS</h2>
            </div>
            <Box
              border={"0px solid red"}
              flexDirection={{ base: "column", md: "row" }}
              display={{ md: "flex" }}
              className="coupon"
            >
              <InputGroup outline={"none"} w={"85%"}>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children=<MdLocalOffer />
                />
                <Input placeholder="Enter Promo Code" />
                <InputRightElement
                  children={<MdCheckCircleOutline color="green.500" />}
                />
              </InputGroup>
              <Button
                mt={{ base: "10px", md: "0" }}
                w={{ base: "80px", md: "100px" }}
                size={"sm"}
                colorScheme="green"
              >
                Apply
              </Button>
            </Box>
            <div className="payment">
              <div>
                {" "}
                <h1>Payment</h1>{" "}
              </div>
              <div>
                {" "}
                <div>Total MRP</div> <div> $ {totalAmount.toFixed(2)}</div>{" "}
              </div>
              <div>
                {" "}
                <div>Discount (20%)</div>{" "}
                <div>
                  {" "}
                  <span className="redspan">
                    -${((totalAmount * 20) / 100).toFixed(2)}
                  </span>
                </div>{" "}
              </div>
              <div>
                {" "}
                <div>Delivery Charge</div>{" "}
                <div>
                  <span className="greenspan">Free</span>
                </div>{" "}
              </div>
              <div>
                {" "}
                <div>Total amount</div>{" "}
                <div>$ {(totalAmount - (totalAmount * 20) / 100).toFixed(2)}</div>{" "}
              </div>
            </div>
            <div className="place_order_btn">
              {" "}
              <Button colorScheme="blue">Place Order</Button>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Checkout;
