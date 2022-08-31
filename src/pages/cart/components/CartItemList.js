import { useContext } from 'react';
import CartItem from './CartItem';
import CartControlBar from './CartControlBar';
import CartContext from '../../../Context/cartContext';
import './CartItemList.scss';

const CartItemList = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="cartItemList">
      <CartControlBar />
      <ul>
        {!cartContext.itemList.length && (
          <p className="emptyCartMessage">장바구니에 담긴 상품이 없습니다.</p>
        )}
        {/* {!cartContext.errorMessage && !cartContext.itemList.length && (
          <p className="emptyCartMessage">장바구니에 담긴 상품이 없습니다.</p>
        )} */}
        {cartContext.itemList.map(item => {
          return <CartItem key={item.id} itemList={item} />;
        })}
      </ul>
    </div>
  );
};

export default CartItemList;
