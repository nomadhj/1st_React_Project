import React, { useState } from 'react';

const ProductItem = ({ data, goToDetail }) => {
  const { id, name, price, img_url } = data;
  const [isHover, setIsHover] = useState(false);

  return (
    <li className="product" key={id} onClick={() => goToDetail(id)}>
      <button>
        <div className="productImageBox">
          <img
            className="productImage"
            src={isHover ? img_url[1] : img_url[0]}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            alt={name}
          />
        </div>
        <div className="productTextBox">
          <p>{name}</p>
          <p>{price}원</p>
        </div>
      </button>
    </li>
  );
};

export default ProductItem;
