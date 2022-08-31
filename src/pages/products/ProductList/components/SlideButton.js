import React from 'react';

const SlideButton = ({ buttonData, moveSlide }) => {
  const { id, name } = buttonData;

  return (
    <button type="button" className="slideButton" onClick={() => moveSlide(id)}>
      {name}
    </button>
  );
};

export default SlideButton;
