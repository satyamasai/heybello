import React, { useEffect, useState } from "react";
import "./Trending.css";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useToast,
} from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Trending = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const skelatonNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //---##--hbkey-----##
  const hbToken = JSON.parse(localStorage.getItem("hbToken"));

  // ------###----Get trendings------###---//
  const getTrendingProduct = () => {
    setLoader(true);
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.5"
      )
      .then((res) => {
        console.log(res.data);
        setTrendingProducts(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  useEffect(() => {
    getTrendingProduct();
  }, []);

  // ----###-----handleSingleProduct-----###----------
  const handleSingleProduct = (single_product) => {
    navigate(`/singleproduct/${single_product.id}`);
    localStorage.setItem("single_product", JSON.stringify(single_product));
  };

  // ----------##handle add to cart----##------------//
  // const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const toast = useToast();
  const handleAddToCart = (cartproduct) => {
    cartproduct.price = Number(cartproduct.price);
    console.log(hbToken, "hbToken");
    console.log(cartproduct, "cp");
    if (!hbToken) {
      toast({
        title: "LOGGING ERROR ",
        description: "Login first to add product into cart..",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return navigate("/login");
    }
    // cartItems.push(cartproduct);
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
    axios
      .post("http://localhost:8080/addtocart", cartproduct, {
        headers: {
          Authorization: `Bearer ${hbToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast({
          title: "Product added.",
          description: "We've added your product to the cart.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Check again..",
          description: "Something went wrong",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  // -------###------####--------//
  return (
    <div className="trending">
      <Flex gap={"4"} flexWrap={"wrap"}>
        {!loader &&
          trendingProducts.map((product, index) => (
            <div key={index} className="t_product_card">
              <div className="sale_tag">
                <img
                  src="https://www.freeiconspng.com/thumbs/sale-tag-png/sale-price-tag-png-18.png"
                  alt="sale tag"
                />
              </div>{" "}
              <img
                onClick={() => handleSingleProduct(product)}
                src={product.api_featured_image}
                alt=""
              />
              <div className="t_product_inner_div">
                <div>
                  <p>{product.name}</p>
                </div>
                <div>
                  {" "}
                  <span>
                    <strike>
                      ₹
                      {Math.floor(product.price) +
                        (Math.floor(product.price) * 20) / 100}
                    </strike>{" "}
                  </span>{" "}
                  ₹ <span style={{ color: "black" }}>{product.price}</span>
                </div>
                <div>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    leftIcon={<MdAddShoppingCart />}
                    colorScheme="pink"
                    variant="solid"
                    size={"sm"}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          ))}

        {loader &&
          skelatonNums.map((el, index) => (
            <Box
              key={index}
              borderRadius={12}
              m={5}
              w={240}
              h={340}
              padding="6"
              boxShadow="lg"
              bg="grey.200"
            >
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          ))}
      </Flex>
    </div>
  );
};

export default Trending;
