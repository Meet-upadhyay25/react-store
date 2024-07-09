import React from "react";
import useAllCategories from "../../../hooks/useAllCategories";

const Categories = ({ handleCategory }) => {
  const categories = useAllCategories();

  return (
    <section className="text-center p-4 mb-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories &&
          categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategory(category)}
              className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              {category}
            </button>
          ))}
      </div>
    </section>
  );
};

export default Categories;
