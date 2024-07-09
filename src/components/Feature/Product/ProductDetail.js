import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";

const ProductDetail = () => {
  const { productName, productId } = useParams();
  const product = useProduct(productId);

  if (!product) return <h1 className="text-center text-2xl mt-10">Loading...</h1>;

  return (
    <div className="max-w-4xl mx-auto p-5">
      {product && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
          <img src={product.image} className="w-full h-96 object-cover md:w-1/2" alt={product.title} />
          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-4">${product.price}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
