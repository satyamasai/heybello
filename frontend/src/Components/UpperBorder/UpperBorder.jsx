import React from "react";
import "./UpperBorder.css";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
  return (
    <div className="upper_border">
      <Box
        width={"300%"}
        className="product_types"
        fontSize={{ sm: "12", md: "18" }}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
        display={{ base: "flex", sm: "flex", md: "flex" }}
      >
        {product_type.map((pt, index) => (
          <div style={{ margin: "5px" }} key={index}>
            <Link
              className="glow_text"
              to={`/product/${pt}`}
              style={{ textTransform: "capitalize" }}
            >
              {pt}
            </Link>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default UpperBorder;
