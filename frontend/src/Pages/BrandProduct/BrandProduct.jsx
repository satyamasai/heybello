import React, { useEffect, useState } from "react";
import "./BrandProduct.css";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import BnbCard from "../../Components/Bnbcard/BnbCard";
import { Circles } from  'react-loader-spinner'
import { Box } from "@chakra-ui/react";
const BrandProduct = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const { brandname } = useParams();

  const getBrandProducts = (brandname) => {
    setLoader(true);
    axios
      .get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandname}`
      )
      .then((res) => {
        console.log(res);
        setLoader(false)
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

  return (
    <div className="brandproduct">
      {!loader?products?.map((item) => (
        <BnbCard item={item} />
      )):<Box  margin="100"
      >
      <Circles
      height="220"
      width="220"
      color="goldenrod"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
     
      
      />
      </Box> 
    }
    </div>
  );
};

export default BrandProduct;
