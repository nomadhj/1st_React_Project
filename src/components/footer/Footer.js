import React, { useContext } from 'react';
import AuthContext from '../../Context/authContext';
import './Footer.scss';

function Footer() {
  const authContext = useContext(AuthContext);
  return (
    <div className="footer">
      <div className="topSection">
        <div className="footerBar">
          <div className="loginSns">
            {!authContext.isLoggedIn && (
              <button className="loginBtn">로그인</button>
            )}
            {authContext.isLoggedIn && (
              <button
                className="loginBtn"
                onClick={() => {
                  authContext.logout();
                }}
              >
                로그아웃
              </button>
            )}
            <div className="sns">
              <img
                className="fb"
                src="https://www.osulloc.com/kr/ko/static_renew/images/sns_f.png?quality=80"
                alt="fb"
              />
              <img
                className="insta"
                src="https://www.osulloc.com/kr/ko/static_renew/images/sns_i.png?quality=80"
                alt="insta"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footerBody">
        <div className="footerInfo">
          <div className="deliveryInfo">
            <div className="deliveryNumber">
              <span>고객상담센터 · 주문/배송문의</span>
              <span>
                <br />
                000-000-0000
                <br />
              </span>
              <span>평일 09:30 - 17:00 (점심 11:30 - 13:00)</span>
            </div>
            <div className="email">
              <span>
                특판, 대량구매 문의
                <br />
                <br />
              </span>
              <span>
                help@help
                <br />
              </span>
              <span>
                010-0000-0000 / 카톡ID : wesulloc
                <br />
              </span>
              <span>평일 09:30 - 17:00 (점심 11:30 - 13:00)</span>
            </div>
          </div>
          <div className="footerIcon">
            <div>
              <img
                id="storemap"
                alt="storemap"
                src="https://www.osulloc.com/kr/ko/static_renew/images/f1.png?quality=80"
              />
              <p>매장안내</p>
            </div>
            <div>
              <img
                id="membership"
                alt="membership"
                src="https://www.osulloc.com/kr/ko/static_renew/images/f2.png?quality=80"
              />
              <p>멤버십혜택</p>
            </div>
            <div>
              <img
                id="faq"
                alt="faq"
                src="https://www.osulloc.com/kr/ko/static_renew/images/f3.png?quality=80"
              />
              <p>FAQ</p>
            </div>
            <div>
              <img
                id="oneToOne"
                alt="1:1문의"
                src="https://www.osulloc.com/kr/ko/static_renew/images/f4.png?quality=80"
              />
              <p>1:1문의</p>
            </div>
            <div>
              <img
                id="point"
                alt="뷰티포인트
                  추후적립"
                src="https://www.osulloc.com/kr/ko/static_renew/images/beauti.png"
              />
              <p>
                뷰티포인트
                <br />
                추후적립
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="bottomInfo">
          <div className="smallInfo">
            <img
              src="/images/footerLogoGray.png"
              alt="footerLogo"
              className="footerLogo"
            />
            <div className="left">
              <div className="topList">
                <ul>
                  {FOOTER_LIST.map(({ id, list }) => (
                    <li key={id}>{list}</li>
                  ))}
                </ul>
              </div>
              <div className="infoSulloc">
                <div className="infoTop">
                  <span>
                    ㈜ 위설록
                    <br />
                    대표이사:위코드 주소:서울특별시 강남구, 사업자등록번호:
                    000-00-00000
                    <br />
                    통신판매업신고번호:2022-서울강남-9999호 호스팅제공자:
                    ㈜위설록
                  </span>
                  <button>사업자 정보확인 </button>
                </div>
                <div className="bottomText">
                  <span>
                    (주)위설록은 위설록 브랜드를 제외한 입점 브랜드에 대해서는
                    통신판매중개자 이며 통신판매의 당사자가 아닙니다.
                    <br />
                    따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을
                    지지 않습니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="perchase">
            <div className="border">
              <span>(주)이니시스 구매안전서비스</span>
              <div>
                <img
                  src="http://image.inicis.com/mkt/certmark/escrow/escrow_43x43_gray.png"
                  alt="INIPAY"
                />
                <span>
                  고객님의 안전거래를 위해 현금 거래에 대해 이니페이
                  에스크로서비스를 이용하실 수 <br />
                  있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const FOOTER_LIST = [
  {
    id: 1,
    list: '회사소개',
  },
  {
    id: 2,
    list: '서비스 이용약관',
  },
  {
    id: 3,
    list: '개인정보 처리방침',
  },
  {
    id: 4,
    list: '뷰티포인트',
  },
  {
    id: 5,
    list: '사이트맵',
  },
  {
    id: 6,
    list: '전자공고',
  },
];

export default Footer;
