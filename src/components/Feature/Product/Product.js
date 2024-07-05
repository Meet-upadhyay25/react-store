import React from "react";
import useAllProducts from "../../../hooks/useAllProducts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
 const products =  useAllProducts();

  return (
    <section className=" mt-10">
        <div className="flex flex-wrap gap-5">
        {products &&
        products.map((product) => (
          <Link to={`/${product.title}/${product.id}`} key={product.id}>
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
          </Link>
        ))}
        </div>
    </section>
  );
};

export default Product;
