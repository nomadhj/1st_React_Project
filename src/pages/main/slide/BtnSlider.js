import React from 'react';
import rightArrow from './icons/right-arrow.svg';
import leftArrow from './icons/left-arrow.svg';
import './Slider.scss';

export default function BtnSlider({ direction, moveslide }) {
  return (
    <button
      key={moveslide}
      onClick={moveslide}
      className={direction === 'next' ? 'btnSlide next' : 'btnSlide prev'}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} alt="Arrow" />
    </button>
  );
}
