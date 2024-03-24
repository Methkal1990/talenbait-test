import React from "react";

import Product from "../components/Product";
import products from "../data.json";

export default function Home() {
  return (
    <div className="home">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
