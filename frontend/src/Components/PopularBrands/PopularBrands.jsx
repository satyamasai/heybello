import React from "react";
import "./PopularBrands.css";
import { Box, Flex } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
let popularbrands = [
  "almay",

  "alva",
  "anna sui",
  "annabelle",
  "benefit",
  "boosh",
  "burt's bees",
  "butter london",

  "cargo cosmetics",
  "china glaze",
  "clinique",
  "coastal classic creation",
  "colourpop",
  "covergirl",
  "dalish",
  "deciem",
  "dior",
  "dr. hauschka",
  "e.l.f.",
  "essie",

  "fenty",
  "glossier",
  "green people",
  "iman",

  "l'oreal",
];

const PopularBrands = () => {
  const navigate = useNavigate();
  const handleBrandPage = (brandname) => {
    navigate(`/specificbrand/${brandname}`);
  };

  return (
    <div className="popularbrands">
      <Flex className="popular_flex" m="auto" wrap="wrap">
        {popularbrands.map((brandname) => (
          <Box
            cursor="pointer"
            onClick={() => handleBrandPage(brandname)}
            w={180}
            m={5}
            border="1px"
            borderColor="goldenrod"
            color="goldenrod"
          >
            {brandname}
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default PopularBrands;
