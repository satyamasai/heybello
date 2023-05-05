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
  
  <Box width={'300%'} className="product_types" fontSize={{sm:'12' ,md:"18"}} border={''}  justifyContent={'space-around'} display={{base:"none",sm:"flex" , md:"flex"}}>
  {
    product_type.map((pt,index)=>(
      <div  key={index}>
      <a className="glow_text" href={`/product/${pt}`} style={{textTransform:'capitalize'}}  >{pt}</a>
      </div>
        ))
        
    }
    </Box>
  </div>;
};

export default UpperBorder;
