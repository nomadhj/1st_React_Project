import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import MainProductImg from './MainProductImg';
import '../mainProductLists/MainProductList.scss';

function MainProductList() {
  const [mainProductList, setMainProductList] = useState([]);
  const navigate = useNavigate();

  const goToProductPage = id => {
    const queryString = `/${id}`;
    navigate(`/ProductList${queryString}`);
  };

  useEffect(() => {
    fetch('/data/mainProductList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMainProductList(data);
      });
  }, []);

  const [cardSlide, setCardSlide] = useState(0);
  const nextCard = e => {
    if (cardSlide !== 5) {
      setCardSlide(cardSlide => cardSlide + 1);
    } else if (cardSlide === 5) {
      setCardSlide(0);
    }
  };

  const prevCard = e => {
    if (cardSlide !== 0) {
      setCardSlide(cardSlide - 1);
    } else if (cardSlide === 0) {
      setCardSlide(5);
    }
  };

  const cardRef = useRef('');
  useEffect(() => {
    cardRef.current.style.transition = `transform 300ms ease-in-out`;
    cardRef.current.style.transform = `translateX(-${cardSlide * 20}%)`;
  }, [cardSlide]);

  return (
    <div className="productListBox">
      <div className="productSlide" ref={cardRef}>
        {mainProductList &&
          mainProductList.map(
            ({
              id,
              img_url,
              name,
              price,
              novel,
              sale_or_not,
              discount_rate,
            }) => (
              <div
                key={id}
                className={
                  cardSlide === id + 1 ? 'cardActiveAnim' : 'slideWrapper'
                }
              >
                <div className="swiperSlide">
                  <div
                    className="productThumb"
                    onClick={() => {
                      goToProductPage(id);
                    }}
                  >
                    <MainProductImg img={img_url} />
                  </div>
                  <div className="productText">
                    <div
                      className="productInfo"
                      onClick={() => {
                        goToProductPage(id);
                      }}
                    >
                      <p className="productName">{name}</p>
                      <div className="productPrice">
                        <p className="priceOrigin">{price}원</p>
                        <div className="saleBox">
                          <div className="priceBox">
                            <p className="resultPrice">
                              {sale_or_not === true
                                ? ((100 - discount_rate) * price) / 100 + '원'
                                : ''}
                            </p>

                            <p className="salePercent">
                              {discount_rate ? discount_rate + '%' : ''}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={novel ? `prdTag` : `disprdTag`}>
                      {novel ? '신제품' : ''}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <div className="move">
        <FaAngleLeft onClick={prevCard} className="movePrev" direction="next" />

        <FaAngleRight
          onClick={nextCard}
          className="moveNext"
          direction="prev"
        />
      </div>
    </div>
  );
}

//
export default MainProductList;
