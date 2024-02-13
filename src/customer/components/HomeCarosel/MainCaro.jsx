import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MCData } from "./MCData";

const MainCaro = () => {
  const items = MCData.map((item) => (
    <img
      className="cursor-pointer sizing"
      src={item.image}
      role="presentation"
    ></img>
  ));
  return (
    <AliceCarousel
      disableButtonsControls
      autoPlay
      infinite
      autoPlayInterval={1000}
      items={items}
    />
  );
};

export default MainCaro;
