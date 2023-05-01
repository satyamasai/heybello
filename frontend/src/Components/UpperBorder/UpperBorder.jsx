import React from "react";
import "./UpperBorder.css";
import { Box } from "@chakra-ui/react";
let product_type = [
  "blush",
  "bronzer",
  "eyebrow",
  "eyeliner",
  "eyeshadow",
  "foundation",
  "lip_liner",
  "lipstick",
  "mascara",
  "nail_polish",
];
const UpperBorder = () => {
  return <div className="upper_border">
  
  <Box  fontSize={{sm:'12' ,md:"18"}} border={'1px solid'} w={'95%'} justifyContent={'space-around'} display={{base:"none",sm:"flex" , md:"flex"}}>
  {
    product_type.map((pt)=>(
        <a style={{textTransform:'capitalize'}}  href="#">{pt}</a>
        ))
        
    }
    </Box>
  </div>;
};

export default UpperBorder;
