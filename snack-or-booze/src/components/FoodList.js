import React from "react";
import { Link } from "react-router-dom";

function FoodList({ items, title, image }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={image}
        alt="food"
        className="absolute object-cover w-full h-full -z-10 opacity-30"
      />
      <div>
        <div className="flex flex-col">
          {items.map((item) => (
            <Link
              to={`/${title}/${item.id}`}
              key={item.id}
              className="p-4 m-2 bg-sky-950 rounded-full"
            >
              <div className="font-bold text-zinc-100">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodList;
