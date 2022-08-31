import Slider from './slide/Slider';
import MainProductList from '../main/mainProductLists/MainProductList';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <section className="mainBanners">
        <Slider />
      </section>
      <section className="notificationInfo">
        <div className="notification">
          <span>공지사항</span>
          <div className="scrollContainer">
            <ul className="notifList">
              {NOTIFICATION_LIST.map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className="more">〉</button>
      </section>
      <section className="mainProduct">
        <div className="mainProductList">
          <div className="productTitle">
            <div className="titleBox">
              <div className="sectionTitle">
                <h3 className="productText">오늘은 어떤 차를 마셔볼까요?</h3>
              </div>
              <ul className="productTab">
                <li className="tabItem">여름맞이 선물</li>
                <li className="tabItemOn">이번 주 인기 제품</li>
              </ul>
            </div>
          </div>
          <div className="listBoxCollect">
            <MainProductList />
            <div className="productBtn">
              <button type="button" className="btnA">
                <span>더 보기</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mainBanner">
        <div className="bannerCollection">
          <div className="banner">
            <div className="bannerFlexBox">
              <div className="contentBox1">
                <div className="contentBoxItem">
                  <div className="bannerImg">
                    <img
                      src="/images/mainImg/mainImg5.png"
                      alt="오늘만 이 가격"
                    />
                    <div className="textBox">
                      <div className="innerBanner">
                        <div className="bannerTitle">
                          <p className="leftText">오늘만 이 가격</p>
                          <p className="rightText" id="todayOnlyArea">
                            16<span>:</span>07<span>:</span>32
                          </p>
                        </div>
                        <div className="banProductInfo">
                          <p className="productName">웨딩 그린티 20입</p>
                          <div className="banPriceInfo">
                            <div className="salePercent">30%</div>
                            <div className="priceOrigin">23,000</div>
                            <div className="priceResult">16,100원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contentBox2">
                <div className="contentBoxItem">
                  <div className="bannerImg">
                    <img
                      src="/images/mainSlide/mainSlide5.png"
                      alt="5월 출석체크"
                    />
                    <div className="textBox">
                      <p className="text01">5월 출석체크</p>
                      <div className="dateInfo">
                        <p className="text02">05.18 - 05.31</p>
                        <span className="ddayTag">D-4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contentBoxItemDepth">
                  <div className="bannerImg">
                    <img
                      src="https://i.pinimg.com/564x/86/90/69/869069f09b7669f10c62e419f681d4a2.jpg"
                      alt="오설록 이야기"
                    />
                    <div className="textBox">
                      <p className="text01">TEA FROM JEJU</p>
                      <p className="text02">오설록 스토리</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="subscribeBox1">
          <div className="subscribetitle">
            <h3 className="text01">다다일상 구독 </h3>
            <p className="text02">하루 한 번, 나를 만나는 시간을 가져보세요.</p>
          </div>
        </div>
        <div className="subsBox">
          <div className="subscribeBox2">
            {DADA_LIST.map(({ id, title, price, text, img }) => (
              <div className="subsList" key={id}>
                <div className="subsSwiperContainer">
                  <div className="swiperWrapper">
                    <div className="swiperSlide">
                      <div className="imgBox2">
                        <div className="hoverBox">
                          <div className="inner">
                            <div className="descriptionBox02">
                              <p className="banTitle">{title}</p>
                              <div className="flexBox">
                                <div className="priceText">
                                  <span className="subDate">매월</span>
                                  <span className="price">{price}</span>
                                </div>
                                <span className="tag">배송비 Free</span>
                              </div>
                              <div className="imgBoxinner" />
                            </div>
                            <div className="banContainer">
                              <p className="text">{text}</p>
                            </div>
                          </div>
                        </div>
                        <img className="subsImg" src={img} alt="" />
                      </div>
                      <div className="descriptionBox">
                        <p className="banTitle">{title}</p>
                        <div className="flexBox">
                          <div className="priceText">
                            <span className="subsDate">매월</span>
                            <span className="price">{price}</span>
                          </div>
                          <span className="tag">배송비 Free</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const NOTIFICATION_LIST = [
  {
    id: 1,
    text: '초콜릿류 상품 판매 일시중단 안내',
  },
  {
    id: 2,
    text: '[공지] 4월 다다일상 베이직/홈카페 배송 지연 안내',
  },
  {
    id: 3,
    text: '[내용정정] 오설록 개인정보 처리방침 변경 고지',
  },
  {
    id: 4,
    text: '[내용정정] CJ대한통운 파업 종료 및 배송지연, 정상화 안내',
  },
  {
    id: 5,
    text: '오설록 티 크리에이터 1기 서류 합격발표 관련 안내',
  },
];

const DADA_LIST = [
  {
    id: 1,
    title: '새롭게 만나는 차, 다다일상 베이직',
    price: '16,000원',
    text: '위설록 티 소믈리애 매월 그달의 테마와 어울리는 차들을 보내드립니다.',
    img: 'https://i.pinimg.com/736x/9b/5f/5f/9b5f5f056db62e9ef9fdd1dea42338f2.jpg',
  },
  {
    id: 2,
    title: '다르게 만나는 차, 다다일상 홈카페',
    price: '26,000원',
    text: '매월 오설록이 티를 이용한 새로운 레시피를 소개해 드립니다. 다양한 레시피를 따라하면서 차를 색다르게 경험해보세요.',
    img: 'https://i.pinimg.com/564x/f8/11/da/f811dad6af05af2d6ea2ad91ce86c0bc.jpg',
  },
  {
    id: 3,
    title: '매일 만나는 차, 정기배송',
    price: '30,000원',
    text: '매일 만나는 차, 정기배송으로 차를 색다르게 경험해보세요.',
    img: 'https://i.pinimg.com/564x/71/0e/a3/710ea3f2a4c9b3b09c9b441ac7971fef.jpg',
  },
];

export default Main;
