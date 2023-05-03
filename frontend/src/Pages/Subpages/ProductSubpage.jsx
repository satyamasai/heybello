import React, { useEffect, useState } from "react";
import "./ProductSubpage.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, SimpleGrid, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import BnbCard from "../../Components/Bnbcard/BnbCard";
const SkeletonNums=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]


const ProductSubpage = () => {
  const { productname } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  console.log(productname, "PT");
  const navigate = useNavigate()
  const getProductsByCategory = () => {
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productname}`
      )
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getProductsByCategory();
  }, []);

   // ------------------------handleViewSingle----------------------------

   const handleViewSingle = (single_item) => {
    navigate(`/singleproduct/${single_item.id}`);
    // console.log("id",id)
    localStorage.setItem("single_product", JSON.stringify(single_item));
  };

  return (
    <div className="product_subpage">
      <SimpleGrid  columns={{sm:1,base:2,md:4}}>
        {!loader && products.map((item) => <BnbCard handleViewSingle={handleViewSingle} item={item} />)}
          {/** -----##  Skeleton effect ##------- */}
  {loader && (
    SkeletonNums?.map((item ,index) => (
      <Box key={index} border={''} m={5} w={300} h={360} padding='6' boxShadow='lg' bg='grey.300' borderRadius={12}>
      <SkeletonCircle size='40' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='4' />
    </Box>
    ))
  ) }
      </SimpleGrid>
    </div>
  );
};

export default ProductSubpage;
