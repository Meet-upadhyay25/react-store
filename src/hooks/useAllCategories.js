import { useEffect, useState } from "react";


const useAllCategories = () => {
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);
  const categories = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    categories();
  }, []);

  return category;
};

export default useAllCategories;
