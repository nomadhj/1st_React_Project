import React, { useState } from 'react';
import BtnSlider from './BtnSlider';
import '../slide/Slider.scss';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== DATA_SLIDER.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DATA_SLIDER.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DATA_SLIDER.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div className="containerSlider">
      {DATA_SLIDER.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide activeAnim' : 'slide'}
          >
            <img
              src={`/images/mainSlide/mainSlide${index + 1}.png`}
              alt="슬라이드 이미지"
            />
            <div className="alignBox">
              <div className="textBox">
                <h3 className="banTitle">{obj.title}</h3>
                <p className="onepoint">{obj.subTitle}</p>
                <p className="date">{obj.date}</p>
              </div>
              <button
                type="button"
                title="이벤트 전체보기"
                className="btnEvent"
              >
                이벤트 전체보기
              </button>
            </div>
          </div>
        );
      })}
      <BtnSlider moveslide={nextSlide} direction="next" />
      <BtnSlider moveslide={prevSlide} direction="prev" />

      <div className="containerDots">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          />
        ))}
      </div>
    </div>
  );
}

const DATA_SLIDER = [
  {
    id: 1,
    title: `위설록 × SAMBYPEN  햇차 리미티드 기프트`,
    subTitle:
      '세 마리 참새들이 지키는 햇차를 담은 리미티드 기프트 최대 25% 할인으로 만나보세요!',
    date: '03.21 - 06.30',
  },
  {
    id: 2,
    title: '위설록의 숨겨진  보석 같은 티 추천',
    subTitle: '잘 알려지진 않았지만, 특별하고 사랑스러운',
    date: '05.25 - 06.08',
  },
  {
    id: 3,
    title: '신제품 구매시 위설록 패키지 증정 ',
    subTitle: '차한잔과 함께 위설록이 드리는 선물',
    date: '05.16 - 05.29',
  },
  {
    id: 4,
    title: '카페인에 예민한 분들을 과일티',
    subTitle: '위설록의 다양한 과일 티를 시도하고 나만의 취향을 찾아보세요.',
    date: '05.19 - 06.05',
  },
  {
    id: 5,
    title: '다다일상 곰돌이 홈카페  체험권 증정',
    subTitle:
      'VIP, VVIP 고객 대상 멤버십 혜택 지금 다다일상 홈카페를 경험해보세요.',
    date: '03.21 - 06.30',
  },
];

export default Slider;
