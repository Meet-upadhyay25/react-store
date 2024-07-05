import React, { useState } from "react";
import Categories from "../components/Feature/Categories/Categories";
import Product from "../components/Feature/Product/Product";

const Home = () => {
  const [category, setCategory] = useState(null);
  console.log(category);
  const handleCategory = (cat) => {
    setCategory(cat);
  };
  return (
    <main className="p-5">
      <Categories handleCategory={handleCategory} />
      <Product />
    </main>
  );
};

export default Home;
