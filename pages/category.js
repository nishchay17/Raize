import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Categories from "../Components/Category/Categories";
import Layout from "../Components/Layout";

function Category() {
  return (
    <Layout title="Category">
      <Navbar tab={"category"} />
      <Categories />
    </Layout>
  );
}

export default Category;
