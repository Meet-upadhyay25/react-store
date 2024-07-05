import React, { useEffect, useState } from "react";

const useProduct = (productId) => {
  const [productDetail, setProductDetail] = useState(null);
  const product = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/" + productId,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setProductDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    product();
  }, []);

  return productDetail;
};

export default useProduct;
