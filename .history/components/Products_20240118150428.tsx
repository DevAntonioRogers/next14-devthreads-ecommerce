"use client";
import { useState } from "react";
import ProductsCard from "./ProductsCard";
import { ProductType } from "@/types/ProductTypes";

const Products: React.FC<{
  allProducts: ProductType[];
}> = ({ allProducts }) => {
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortBy(e.target.value);
  };

  const sortProducts = () => {
    if (sortBy === "Price Low-High") {
      return allProducts
        .slice()
        .sort((a, b) => a.unit_amount - b.unit_amount);
    } else if (sortBy === "Price High-Low") {
      return allProducts
        .slice()
        .sort((a, b) => b.unit_amount - a.unit_amount);
    } else {
      return allProducts;
    }
  };

  const sortedProducts = sortProducts();

  return (
    <section className="relative md:py-24 py-16">
      <div className="main-container">
        <div className="md:flex justify-between items-center mb-6">
          <span className="font-semibold">
            Showing 1-12 of {allProducts.length} items
          </span>
          <div className="md:flex items-center">
            <label className="font-semibold md:me-2">
              Sort by:
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
