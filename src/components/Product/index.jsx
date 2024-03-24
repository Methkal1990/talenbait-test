import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Product({ product }) {
  const { productName, productDescription, productImage, price, id } = product;
  return (
    <div className="product__card">
      <img src={productImage} alt={productName} />
      <Link to={`/ads/${id}`}>
        <h2 className="product__card__name">{productName}</h2>
      </Link>
      <p className="product__card__description">{productDescription}</p>
      <p className="product__card__price">{price}</p>
    </div>
  );
}
