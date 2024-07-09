import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products, category }) => {
  
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {category ? category.toUpperCase() + " Items" : "Most Popular"}
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {products &&
          products.map((product) => (
            <Link
              to={`/${product.title}/${product.id}`}
              key={product.id}
              className="w-full sm:w-72"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={product.image}
                  alt={product.title}
                />
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    {product.title}
                  </h5>
                  <p className="flex justify-between items-center text-gray-700">
                    <span className="text-lg font-semibold">
                      ${product.price}
                    </span>
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 text-yellow-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.373 2.455a1 1 0 00-.364 1.118l1.286 3.953c.3.921-.755 1.688-1.54 1.118l-3.373-2.455a1 1 0 00-1.175 0l-3.373 2.455c-.785.57-1.838-.197-1.54-1.118l1.286-3.953a1 1 0 00-.364-1.118L2.062 9.38c-.783-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.953z" />
                      </svg>
                      {product.rating.rate}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Product;
