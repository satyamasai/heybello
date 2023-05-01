import React, { useEffect, useState } from "react";
import "./BrandProduct.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import BnbCard from "../../Components/Bnbcard/BnbCard";
import { RotatingSquare } from "react-loader-spinner";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Filter from "../../Components/Filter/Filter";
import { Skeleton } from 'react-loading-skeleton';
const BrandProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const { brandname } = useParams();
  const SkeletonNums=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
  const getBrandProducts = (brandname) => {
    setLoader(true);
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandname}`
      )
      .then((res) => {
        console.log(res);
        setLoader(false);
        setProducts(res.data);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getBrandProducts(brandname);
  }, [brandname]);

  // ------------------------handleViewSingle----------------------------

  const handleViewSingle = (single_item) => {
    navigate(`/singleproduct/${single_item.id}`);
    // console.log("id",id)
    localStorage.setItem("single_product", JSON.stringify(single_item));
  };
  // -------------handle filter-----------------
  const handleFilter = (value) => {
    console.log(value, "filtervalue");
    if (value == "asc") {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else if (value == "desc") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
  };

  return (
    <div className="brandproduct">
      <Filter handleFilter={handleFilter} />
      {!loader && (
        products?.map((item) => (
          <BnbCard handleViewSingle={handleViewSingle} item={item} />
        ))
      ) }

  {/** -----##  Skeleton effect ##------- */}
  {loader && (
    SkeletonNums?.map((item ,index) => (
      <Box key={index} border={'1px solid goldenrod'} m={5} w={340} h={300} padding='6' boxShadow='lg' bg='grey.300' borderRadius={12}>
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    </Box>
    ))
  ) }

    </div>
  );
};

export default BrandProduct;
