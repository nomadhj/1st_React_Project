import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/authContext';
import './Nav.scss';

function Nav() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const cartItemList = useSelector(state => state.cart.itemList);

  const clickHanlder = () => {
    if (!authContext.isLoggedIn) return;
    navigate('/cart');
  };

  return (
    <header className="nav">
      <div className="navInnerBox">
        <div className="leftBox">
          <h1 className="wesullocLogo">
            <Link to="/" className="whiteLogoImg">
              <img
                className="whiteLogoImg"
                src="/images/logoWhite.png"
                alt="위설록 로고"
              />
            </Link>
          </h1>
          <nav className="wesullocNav">
            <Link to="/ProductList" className="productList">
              제품
            </Link>
          </nav>
        </div>
        <div className="rightBox">
          <ul className="navDrop">
            <li className="item">
              <button className="cartIcon" onClick={clickHanlder}>
                <i className="fa-solid fa-cart-shopping" />
                <span className="badge">{cartItemList.length}</span>
              </button>
            </li>
            {!authContext.isLoggedIn && (
              <li className="item">
                <Link to="/login" className="loginTitle">
                  로그인
                </Link>
              </li>
            )}
            {!authContext.isLoggedIn && (
              <li className="item">
                <Link to="/signup" className="loginTitle">
                  회원가입
                </Link>
              </li>
            )}
            {authContext.isLoggedIn && (
              <li className="item">
                <button className="logOut" onClick={authContext.logout}>
                  로그아웃
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Nav;
