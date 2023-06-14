import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/fetchData";
import snackImage from "../assets/snacks.png";
import drinkImage from "../assets/drinks.png";

function Home() {
  const { snacks, drinks } = useFetchData();

  const data = [
    {
      title: "Snacks",
      count: snacks.length,
      image: snackImage,
    },
    {
      title: "Drinks",
      count: drinks.length,
      image: drinkImage,
    },
  ];

  return (
    <div className="flex flex-wrap justify-evenly items-center mt-40">
      {data.map((section, index) => (
        <div key={index}>
          <div className="absolute flex bg-zinc-100 p-4 rounded-full w-44 mt-6 ml-10 shadow-lg">
            <h2 className="text-3xl text-black font-bold mr-auto">
              {section.title}:
            </h2>
            <p className="text-3xl text-black font-bold">{section.count}</p>
          </div>
          <div className="max-w-md rounded-full overflow-hidden ml-4">
            <div className="w-full h-full">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
