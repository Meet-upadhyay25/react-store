
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
    <main className="p-5 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Categories handleCategory={handleCategory} />
        <Product products={products} />
      </div>
    </main>
  );
};

export default Home;