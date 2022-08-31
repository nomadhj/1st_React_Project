import { useState } from 'react';

const MainProductImg = ({ img }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <img
      className="productThumb default"
      src={isHover ? img[1] : img[0]}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      alt="상품페이지"
    />
  );
};

export default MainProductImg;
