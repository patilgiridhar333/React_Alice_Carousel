import React, { useState } from "react";
import { kurtaPage1 } from "../../../Data/men_kurta";
import HomeSection from "./HomeSection";
import AliceCarousel from "react-alice-carousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";

export default function SectionCaro() {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const items = kurtaPage1.map((item) => <HomeSection item={item} />);
  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
          renderPrevButton={() => {
            return (
              <Button
                variant="contained"
                className="z-50"
                sx={{
                  position: "absolute",
                  top: "8rem",
                  left: "0rem",
                  transform: "translateX(-50%) rotate(90deg)",
                  bgcolor: "white",
                }}
              >
                <ChevronLeftIcon
                  sx={{ transform: "rotate(-90deg)", color: "black" }}
                />
              </Button>
            );
          }}
          renderNextButton={() => {
            return (
              <Button
                variant="contained"
                className="z-50"
                sx={{
                  position: "absolute",
                  top: "8rem",
                  right: "0rem",
                  transform: "translateX(50%) rotate(90deg)",
                  bgcolor: "white",
                }}
              >
                <ChevronLeftIcon
                  sx={{ transform: "rotate(90deg)", color: "black" }}
                />
              </Button>
            );
          }}
        />
      </div>
    </div>
  );
}
