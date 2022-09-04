import { useSelector, useDispatch } from 'react-redux';
import CartItemList from './components/CartItemList';
import Button from '../../components/UI/Button';
import SideBar from './components/SideBar';
import FreeGift from './components/FreeGift';
// import ErrorModal from './components/ErrorModal';
import { cartActions } from '../../store/cartSlice';
import './Cart.scss';

const Cart = () => {
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  const clickHandler = category => {
    dispatch(cartActions.orderItems(category));
  };

  return (
    <>
      {/* todo : 에러 UI 구현 */}
      {/* {cartContext.errorMessage && <ErrorModal />} */}
      <section className="cart">
        <div className="cartPageTitle">
          <div className="cartTitleWrapper">
            <h2>장바구니</h2>
          </div>
        </div>
        <div className="cartPageContent">
          <section className="orderedItem">
            <CartItemList />
            {totalPrice >= 30000 && <FreeGift />}
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
