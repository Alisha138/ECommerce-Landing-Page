import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
);

export default Products;
