import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function FoodItem({ items }) {
  const { id } = useParams();
  const navigate = useNavigate();

  let item = items.find((item) => item.id === id);
  if (!item) return navigate("/");

  return (
    <section className="flex justify-center items-center mt-52">
      <div className="bg-gradient-to-r w-3/5 from-sky-900 to-cyan-600 rounded-lg shadow-lg p-8 text-zinc-100">
        <h2 className="text-3xl font-bold text-center mb-4">{item.name}</h2>
        <p className="italic font-bold text-2xl">{item.description}</p>
        <p className="text-2xl mt-4">
          <span className="font-bold">Recipe:</span> {item.recipe}
        </p>
        <br />
        <p className="text-2xl">
          <span className="font-bold">Serve:</span> {item.serve}
        </p>
      </div>
    </section>
  );
}

export default FoodItem;
