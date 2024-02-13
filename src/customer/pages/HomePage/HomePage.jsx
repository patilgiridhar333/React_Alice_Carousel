import React from "react";
import MainCaro from "../../components/HomeCarosel/MainCaro";
import HomeSection from "../../components/HomeSectionCard/HomeSection";
import SectionCaro from "../../components/HomeSectionCard/SectionCaro";

export default function HomePage() {
  return (
    <div>
      <MainCaro></MainCaro>
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <SectionCaro></SectionCaro>
        <SectionCaro></SectionCaro>
        <SectionCaro></SectionCaro>
        <SectionCaro></SectionCaro>
        <SectionCaro></SectionCaro>
      </div>
    </div>
  );
}
