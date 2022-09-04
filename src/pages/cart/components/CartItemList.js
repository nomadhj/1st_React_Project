import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartControlBar from './CartControlBar';
import './CartItemList.scss';

const CartItemList = () => {
  const cartItemList = useSelector(state => state.cart.itemList);

  return (
    <div className="cartItemList">
      <CartControlBar />
      <ul>
        {!cartItemList.length && (
          <p className="emptyCartMessage">장바구니에 담긴 상품이 없습니다.</p>
        )}
        {/* {!cartContext.errorMessage && !cartContext.itemList.length && (
          <p className="emptyCartMessage">장바구니에 담긴 상품이 없습니다.</p>
        )} */}
        {cartItemList.map(item => {
          return <CartItem key={item.id} itemList={item} />;
        })}
      </ul>
    </div>
  );
};

export default CartItemList;
