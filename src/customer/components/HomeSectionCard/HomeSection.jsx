import React from "react";
import { kurtaPage1 } from "../../../Data/men_kurta";

export default function HomeSection({ item }) {
  return (
    <div className=" cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={item.image}
        />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-left text-lg font-medium text-gray-900">
          {item.brand}
        </h3>
        <p className="mt-2 text-left text-sm text-gray-500">{item.title}</p>
      </div>
    </div>
  );
}
