import React, { useEffect, useState } from "react";
import "./BrandProduct.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import BnbCard from "../../Components/Bnbcard/BnbCard";
import { RotatingSquare} from  'react-loader-spinner'
import { Box } from "@chakra-ui/react";
const BrandProduct = () => {
  const navigate = useNavigate()
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

// ------------------------handleViewSingle----------------------------

const handleViewSingle =(single_item)=>{
navigate(`/singleproduct/${single_item.id}`)
// console.log("id",id)
localStorage.setItem("single_product",JSON.stringify(single_item));




}

  return (
    <div className="brandproduct">
      {!loader?products?.map((item) => (
        <BnbCard handleViewSingle={handleViewSingle}  item={item} />
      )):<Box  margin="100"
      >
      <RotatingSquare
      height="230"
      width="220"
      color="goldenrod"
      ariaLabel="rotating-square-loading"
      strokeWidth="5"
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
