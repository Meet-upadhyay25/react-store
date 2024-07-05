import { useEffect, useState } from "react";
const useAllProducts = () => {
  const [product, setProduct] = useState(null);
  const products = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products?sort=desc&limit=5",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    products();
  }, []);

  return product;
};

export default useAllProducts;
