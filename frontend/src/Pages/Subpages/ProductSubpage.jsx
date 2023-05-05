import React, { useEffect, useState } from "react";
import "./ProductSubpage.css";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  Box,
  Select,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import BnbCard from "../../Components/Bnbcard/BnbCard";
import { GET_PRODUCTS_BY_TYPE } from "../../Utils/url";
let SkeletonNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ProductSubpage = () => {
  const { productname } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  // console.log(productname, "PT");
  const navigate = useNavigate();
  // const [brand_name, setBrandName] = useState("");
  // const [allBrand, setAllBrands] = useState([]);
  let allBrandsNames = [];

  // ----### ---get all brands name ---####----//

  // const getAllBrandsName = () => {
  //   axios
  //     .get(`${GET_PRODUCTS_BY_TYPE}/${productname}`)
  //     .then((res) => {
  //       setAllBrands(res.data);

  //       // allBrand.map((el) => allBrandsNames.push(el.brand));
  //     })
  //     .catch((err) => {
  //       setLoader(false);
  //       console.log(err);
  //     });
  // };

  // --------if brand name

  const [searchParams, setSearchParams] = useSearchParams();
  // if(brand_name){
  //   setSearchParams(brand_name)
  // }

  // -----select - brand name only------------
//  for(let i=0;i<allBrand.length;i++){

//   if(!allBrandsNames.includes(allBrand[i].brand)) {
//     allBrandsNames.push(allBrand[i].brand);
//   }
//  }
  // allBrand.map( (el,index) => {
  //   return(

  //     )
  // });
  // console.log(allBrandsNames, "an");

  // -------#######-----------#########_--------------------------////
  const getProductsByCategory = () => {
    axios
      .get(`${GET_PRODUCTS_BY_TYPE}/${productname}`)
      .then((res) => {
        // console.log(res.data);
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
    // getAllBrandsName();
  }, []);

  // ------------------------handleViewSingle----------------------------
  
  const handleViewSingle = (single_item) => {
    navigate(`/singleproduct/${single_item.id}`);
    // console.log("id",id)
    localStorage.setItem("single_product", JSON.stringify(single_item));
  };
  // ------------------------handleViewSingle----------------------------

  return (
    <div className="product_subpage">
      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent={"center"}
        h={"50px"}
        w={"100%"}
      >
        <Select
          bg="orange.300"
          size={"md"}
          m={"auto"}
          w={"180px"}
          outline={"none"}
          borderColor="tomato"
          color="white"
          placeholder="Select By Brand!"
          className="subpage_select"
          onChange={(e) => {
            // setBrandName(e.target.value);
            let params = { brand_name: e.target.value };
            setLoader(true);
            setSearchParams(params);
          }}
        >
          {allBrandsNames?.map((brands,index) => (
            <option key={index} className="subpage_option" value={brands}>
              {brands}
            </option>
          ))}
        </Select>
      </Box>
      <SimpleGrid columns={{ sm: 2, base: 1, md: 2, lg: 3, xl: 4 }}>
        {!loader &&
          products.map((item,index) => (
            <BnbCard key={index} handleViewSingle={handleViewSingle} item={item} />
          ))}
        {/** -----##  Skeleton effect ##------- */}
        {loader &&
          SkeletonNums?.map((item, index) => (
            <Box
              key={index}
              border={""}
              m={5}
              w={300}
              h={360}
              padding="6"
              boxShadow="lg"
              bg="grey.300"
              borderRadius={12}
            >
              <SkeletonCircle size="40" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="4"
              />
            </Box>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default ProductSubpage;
