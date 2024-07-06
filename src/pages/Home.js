import React, { useState } from "react";
import Categories from "../components/Feature/Categories/Categories";
import Product from "../components/Feature/Product/Product";
import useAllProducts from "../hooks/useAllProducts";

const Home = () => {
  const [category, setCategory] = useState(null);
  const products = useAllProducts(category);

  const handleCategory = (cat) => {
    setCategory(cat);
  };

  return (
    <main className="p-5">
      <Categories handleCategory={handleCategory} />
      <Product products={products} />
    </main>
  );
};

export default Home;
