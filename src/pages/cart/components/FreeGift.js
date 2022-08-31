import { useState } from 'react';
import './FreeGift.scss';

const FreeGift = () => {
  const [isOpen, setIsOpen] = useState(false);

  const btnHandler = event => {
    event.preventDefault();
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="freeGift">
      <div className="title">
        <p>사은품 증정</p>
        <div className="buttonWrapper">
          <p>3만원 이상 (시트마스크 2입)외 2종</p>
          <button className="toggleBtn" onClick={btnHandler}>
            {isOpen && <i className="fa-solid fa-angle-up" />}
            {!isOpen && <i className="fa-solid fa-angle-down" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="contentBox">
          <div className="giftList">
            <div className="imgWrapper">
              <img src="images/CartFreeGift01.jpeg" alt="gift" />
              <p>3만원 이상 (찻잔)</p>
            </div>
            <div className="imgWrapper">
              <img src="images/CartFreeGift02.jpeg" alt="gift" />
              <p>5만원 이상 (녹차 로션)</p>
            </div>
          </div>
          <div className="description">
            <ul>
              {FREE_GIFT_REGULATIONS.map(regulation => {
                return <li key={regulation.id}>{regulation.desc}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const FREE_GIFT_REGULATIONS = [
  {
    id: 1,
    desc: '- 할인쿠폰 사용 시, 쿠폰 적용 이후 총 금액에 대한 사은품이 발송됩니다.',
  },
  {
    id: 2,
    desc: '- 재고 현황에 따라 사전 고지없이 사은품이 변경될 수 있습니다.',
  },
  {
    id: 3,
    desc: '- 베이커리 및 티웨어(다기류) 입점 상품은 해당되지 않습니다.',
  },
  {
    id: 4,
    desc: '- 3만원 이상 구매시, 티 하우스 및 오설록 오프라인 매장에서 사용가능한 5,000원 지류쿠폰이 제공됩니다.',
  },
];

export default FreeGift;
