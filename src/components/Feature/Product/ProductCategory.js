import React from "react";

const ProductCategory = () => {
  return (
    <div>
      <h1>Product Category</h1>
      <div className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="max-w-[100px]" src={product.image} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="flex justify-between items-center">
            <span>${product.price}</span>
            <span>*{product.rating.rate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
