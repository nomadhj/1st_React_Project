import { useContext } from 'react';
import CartItemList from './components/CartItemList';
import Button from '../../components/UI/Button';
import SideBar from './components/SideBar';
import FreeGift from './components/FreeGift';
import ErrorModal from './components/ErrorModal';
import CartContext from '../../Context/cartContext';
import './Cart.scss';

const Cart = () => {
  const cartContext = useContext(CartContext);

  const clickHandler = category => {
    cartContext.orderItems(category);
  };

  return (
    <>
      {cartContext.errorMessage && <ErrorModal />}
      <section className="cart">
        <div className="cartPageTitle">
          <div className="cartTitleWrapper">
            <h2>장바구니</h2>
          </div>
        </div>
        <div className="cartPageContent">
          <section className="orderedItem">
            <CartItemList />
            {cartContext.totalPrice >= 30000 && <FreeGift />}
            <div className="buttonWrapper">
              <Button btnFunction={clickHandler.bind(null, 'orderSelected')}>
                선택상품 주문
              </Button>
              <Button
                btnFunction={clickHandler.bind(null, 'orderSelected')}
                bgStyle="green"
              >
                전체상품 주문
              </Button>
            </div>
          </section>
          <SideBar />
        </div>
      </section>
    </>
  );
};

export default Cart;
