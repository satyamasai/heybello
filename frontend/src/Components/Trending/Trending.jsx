import React, { useEffect, useState } from "react";
import "./Trending.css";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  
  SkeletonCircle,
  SkeletonText,
  useToast,
} from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {GET_ALL_PRODUCTS} from "../../Utils/url.js"
import { getItems, getcartItems } from "../../Redux/App/appactions";
import { useDispatch, useSelector } from 'react-redux'
const Trending = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [cartLoader, setCartLoader] = useState(false);
  const navigate = useNavigate();
  const skelatonNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //---##--hbkey-----##

  // ------###----Get trendings------###---//
  const items= useSelector(store=>store.items);
  // if(items)setLoader(false);
  console.log(items.length,"check")

   const dispatch = useDispatch()
  useEffect(() => {
    getItems(dispatch)
    
  },[]);

  // ----###-----handleSingleProduct-----###----------
  const handleSingleProduct = (single_product) => {
    navigate(`/singleproduct/${single_product.id}`);
    localStorage.setItem("single_product", JSON.stringify(single_product));
  };

  // ----------##handle add to cart----##------------//
  
  const toast = useToast();
  const handleAddToCart = (cartproduct) => {
    setCartLoader(true)
    const hbToken = JSON.parse(localStorage.getItem("hbToken"))  ;

    cartproduct.price = Number(cartproduct.price);
  
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
   
    axios
      .post("https://hbserver-ous1.onrender.com/addtocart", cartproduct, {
        headers: {
          Authorization: `Bearer ${hbToken}`,
        },
      })
      .then((res) => {
        // console.log(res);
        getcartItems(dispatch);

        toast({
          title: "Product added.",
          description: "We've added your product to the cart.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setCartLoader(false)
      })
      .catch((err) => {
        console.log(err);
        setCartLoader(false)
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
      <div className="trending_grid" >
        {items.length>0? 
          items.map((product, index) => (
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
                 {!cartLoader ? <Button

                  className="trending_cart_btn"
                    onClick={() => handleAddToCart(product)}
                    leftIcon={<MdAddShoppingCart />}
                    colorScheme="pink"
                    variant="solid"
                    size={{sm:"xsm",md:"sm",lg:'md'}}

                  >
                    Add to cart
                  </Button> : <Button isLoading colorScheme='teal' variant='solid'>
                  Email
                </Button>}
                </div>
              </div>
            </div>
          )): skelatonNums.map((el, index) => (
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
      </div>
    </div>
  );
};

export default Trending;
