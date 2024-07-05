import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";

const ProductDetail = () => {
  const { productName, productId } = useParams();
  const product = useProduct(productId);

  return (
    <div>
      {product && (
        <div>
            <img src={product.image} className="w-[50px]"/>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>{product.category}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
