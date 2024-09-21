import React from "react";
import "./banner.css"; // Import CSS for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner= () => {
  const images = [
    { id: 1, src: "/assets/yellow_suit.jpeg", alt: "Image 1" },
    { id: 2, src: "/assets/red_suit.jpeg", alt: "Image 2" },
    { id: 3, src: "/assets/green_suit.jpeg", alt: "Image 3" },
    // { id: 1, src: "/assets/made_in_rwanda.jpg", alt: "Image 1" },
    { id: 2, src: "/assets/robe.jpeg", alt: "Image 2" },
    // { id: 3, src: "/assets/suit)hanger.jpeg", alt: "Image 3" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds per slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="home-container">
      <h1>Welcome to Our Store</h1>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="carousel-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );

};

export default Banner;
