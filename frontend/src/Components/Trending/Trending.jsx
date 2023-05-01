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
} from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
const Trending = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const skelatonNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  return (
    <div className="trending">
      <Flex gap={"4"} flexWrap={"wrap"}>
        {!loader &&
          trendingProducts.map((product) => (
            <div className="t_product_card">
              <img src={product.api_featured_image} alt="" />
              <div className="t_product_inner_div">
                <div>
                  <p>{product.name}</p>
                </div>
                <div>
                  <Button
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
          skelatonNums.map(() => (
            <Box borderRadius={12} m={5} w={240} h={340}  padding="6" boxShadow="lg" bg="grey.200">
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
