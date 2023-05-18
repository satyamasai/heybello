import "./Slider.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coverimage from "../../Photo/cover-image1.jpg";
import { Img } from "@chakra-ui/react";
let tempCarouselData = [
  coverimage,
  "https://images-static.nykaa.com/uploads/90e30c9e-db98-455b-89e8-5eefaba601d0.jpg",
  "https://images-static.nykaa.com/uploads/2b94716c-fddc-4e80-a4cf-b2c252182165.jpg",
  "https://images-static.nykaa.com/uploads/3c0c39ae-695d-4aac-bfc7-7d89476515d7.jpg",
];
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  };
  return (
    <Slider className="slider" {...settings}>
      {tempCarouselData.map((imageUrl,index) => (
        <div className="carouselCard" key={index}>
          <Img height={{sm:"280px",md:'400px' ,base:'200px'} }   src={imageUrl} alt="img" />
        </div>
      ))}
    </Slider>
  );
}
