import { useState, useEffect, useContext } from 'react';
import CartContext from '../../../Context/cartContext';
import './CartItem.scss';

const CartItem = ({ itemList }) => {
  const [isBtnValid, setIsBtnValid] = useState(false);
  const cartContext = useContext(CartContext);
  const { id, name, price, amount, isChecked } = itemList;

  const amountInputHandler = event => {
    if (event.target.value.length >= 3) {
      cartContext.changeItems(id, 'amount', 99);
      cartContext.errorMessageHandler('inputValueExceeded');
    } else {
      +event.target.value === 0
        ? cartContext.changeItems(id, 'amount', 1)
        : cartContext.changeItems(id, 'amount', +event.target.value);
    }
  };

  const amountIncreaseHandler = event => {
    event.preventDefault();
    if (amount === 99) {
      cartContext.changeItems(id, 'amount', 99);
      cartContext.errorMessageHandler('inputValueExceeded');
    } else {
      cartContext.changeItems(id, 'amount', amount + 1);
    }
  };

  const amountDecreaseHandler = event => {
    event.preventDefault();
    cartContext.changeItems(id, 'amount', amount - 1);
  };

  useEffect(() => {
    setIsBtnValid(amount > 1);
  }, [amount]);

  const checkboxHandler = () => {
    cartContext.changeItems(id, 'isChecked', !isChecked);
  };

  const orderHandler = event => {
    event.preventDefault();
    cartContext.orderItems(id, null);
  };

  return (
    <li className="cartItem">
      <div className="checkBoxWrapper">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={checkboxHandler}
        />
        <label htmlFor={id}>
          <div>
            <img src="/images/iconCheckWhite.png" alt="iconCheck" />
          </div>
        </label>
      </div>
      <div className="itemInfo">
        <img src={`images/cartItemListImg/00${id}.png`} alt="product" />
        <div className="itemInfoText">
          <a href="$">{name}</a>
        </div>
      </div>
      <div className="countPrice">
        <div className="countButtonWrapper">
          <button disabled={!isBtnValid} onClick={amountDecreaseHandler}>
            <i className="fa-solid fa-minus" />
          </button>
          <input value={amount} type="number" onChange={amountInputHandler} />
          <button onClick={amountIncreaseHandler}>
            <i className="fa-solid fa-plus" />
          </button>
        </div>
        <p>{`${(price * amount).toLocaleString('en')}원`}</p>
      </div>
      <div className="purchaseButtonWrapper">
        <button onClick={orderHandler}>바로구매</button>
      </div>
    </li>
  );
};

export default CartItem;
