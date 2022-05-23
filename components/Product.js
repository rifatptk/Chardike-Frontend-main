import React from 'react';
import Link from 'next/link';

const Product = ({ product: { feature_image, name, id, New_price } }) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="product-card">
          <img
           
            src={feature_image}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${New_price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product