import React from "react";
import useAllCategories from "../../../hooks/useAllCategories";
import { useSelector } from "react-redux";

const Categories = ({ handleCategory }) => {
  const category = useAllCategories();

  return (
    <section className="text-center">
      {category &&
        category.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className="bg-slate-400 mr-4 rounded-lg px-5 py-1 text-white"
          >
            {cat}
          </button>
        ))}
    </section>
  );
};

export default Categories;
