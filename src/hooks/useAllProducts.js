import { useEffect, useState } from "react";
const useAllProducts = (category) => {
  const [product, setProduct] = useState(null);

  const mostPopular = async () => {
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
  const productCategory = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`,
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
    if(!category){
      mostPopular();
    }else{
      productCategory()
    }
  }, [category]);

  return product;
};

export default useAllProducts;
