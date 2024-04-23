import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Html from "./Html";
import Css from "./Css";
import JavaScript from "./JavaScript";
import Tailwind from "./Tailwind";
import Target from "./Target";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "tomato" }}
      onClick={onClick}
    />
  );
}
const MainContent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000,
    nextArrow2: <Arrow />,
    prevArrow2: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='500'
      data-aos-easing='ease-in-cubic'
      className='container max-w-[1320px] mx-auto bg-[#fdfcdc]'
    >
      <Slider {...settings} data-aos-delay='300'>
        <Html />
        <Css />
        <JavaScript />
        <Tailwind />
        <Target />
      </Slider>
    </div>
  );
};

export default MainContent;
