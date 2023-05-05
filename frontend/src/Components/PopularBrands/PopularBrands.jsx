import React from "react";
import "./PopularBrands.css";
import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
let popularbrands = [
  {
    brand_name: "almay",
    brand_png:
      "https://media1.popsugar-assets.com/files/thumbor/KB4TTUc8xPyf4701qovsRSudkOQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/05/03/689/n/44807535/9819c5b95aeb2b83ca9bd4.96121597_/i/Almay.jpg",
  },
  {
    brand_name: "alva",
    brand_png:
      "https://c-ec.niceshops.com/upload/image/sidebarlogo/original/default/78191_906152d4.jpg",
  },

  {
    brand_name: "anna sui",
    brand_png:
      "https://media.licdn.com/dms/image/C4E0BAQERuC_NEhYr5Q/company-logo_200_200/0/1522940488072?e=2147483647&v=beta&t=mDMtkZ9fCRiksGL26fFcPY7kCAyxbdigPn17auXhPss",
  },

  {
    brand_name: "annabelle",
    brand_png:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Annabelle-Logo.svg",
  },

  {
    brand_name: "benefit",
    brand_png:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6klnV_KGriaMS4OZfKCqlpDE4HyU4IY_4Wibb_ocWAA&usqp=CAU&ec=48665698",
  },
  {
    brand_name: "boosh",
    brand_png:
      "https://cdn.shopify.com/s/files/1/1016/3243/files/BooshLogo_2019-02-01_360x.png?v=1613727190",
  },

  {
    brand_name: "burt's bees",
    brand_png:
      "https://www.thecloroxcompany.com/wp-content/uploads/2018/05/Burts-Bees.png",
  },

  {
    brand_name: "butter london",
    brand_png:
      "https://butterlondon.co.uk/cdn/shop/files/BL_LARGE_HIRES_LOGO_1200x.png?v=1637599222",
  },

  {
    brand_name: "cargo cosmetics",
    brand_png:
      "https://logo-all.ru/uploads/posts/2022-02/0_cargo_cosmetics_logo.jpg",
  },

  {
    brand_name: "china glaze",
    brand_png:
      "https://hqsalonspa.ca/wp-content/uploads/2016/11/HQ-SALON-SPA-CHINA-GLAZE-LOGO.jpg",
  },

  {
    brand_name: "clinique",
    brand_png:
      "https://1000logos.net/wp-content/uploads/2020/04/Logo-Clinique.jpeg",
  },

  {
    brand_name: "covergirl",
    brand_png:
      "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2017-10-10-at-12-17-05-pm-1507652241.png?crop=0.766xw:0.857xh;0.0865xw,0.0430xh&resize=640:*",
  },
  {
    brand_name: "dalish",
    brand_png:
      "https://cdn.shopify.com/s/files/1/0077/5340/0356/files/da_lish_NEW_logo_small_205x.png?v=1613575755",
  },

  {
    brand_name: "dior",
    brand_png:
      "https://i.pinimg.com/originals/63/f8/a2/63f8a246bb50fcabc4eaa762f26d27e1.jpg",
  },

  {
    brand_name: "e.l.f.",
    brand_png:
      "https://seeklogo.com/images/E/elf-cosmetics-logo-5C73482AB6-seeklogo.com.png",
  },

  {
    brand_name: "l'oreal",
    brand_png:
      "https://1000logos.net/wp-content/uploads/2017/03/Font-LOreal-Logo.jpg",
  },
];

const PopularBrands = () => {
  const navigate = useNavigate();
  const handleBrandPage = (brandname) => {
    navigate(`/specificbrand/${brandname}`);
  };

  return (
    <div className="popularbrands">
      <Heading>Top Brands</Heading>
      <SimpleGrid
      className="popular_flex"
        p={"10px"}
        gap={"10px"}
        // display={{sm:'grid', md:'grid',lg:'flex '}}
        columns={{base:2,sm:3, md:4}}
      
      >
        {popularbrands.map((brand,index) => (
          <Box
          key={index}
            borderRadius={"10px"}
            cursor="pointer"
            onClick={() => handleBrandPage(brand.brand_name)}
            w={{base:'160px',sm:'180px',md:"180px"}}
            m={5}
            h={"120px"}
            margin={"auto"}
            p={'5px'}
            border={''}
            borderColor="goldenrod"
            color="goldenrod"
            display={"flex"}
            alignItems={"center"}
          >
            <Image
              w={"100%"}
              borderRadius={"10px"}
              h={"100%"}
              src={brand.brand_png}
              alt="brand_logo"
            />
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default PopularBrands;
