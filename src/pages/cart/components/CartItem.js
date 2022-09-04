import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartSlice';
import './CartItem.scss';

const CartItem = ({ itemList }) => {
  const [isBtnValid, setIsBtnValid] = useState(false);
  const dispatch = useDispatch();
  const { id, name, price, amount, isChecked } = itemList;

  const amountInputHandler = event => {
    if (event.target.value.length >= 3) {
      dispatch(cartActions.changeItems({ id: id, key: 'amount', value: 99 }));
      // todo: 에러 UI 추가
      // cartContext.errorMessageHandler('inputValueExceeded');
    } else {
      +event.target.value === 0
        ? dispatch(cartActions.changeItems({ id: id, key: 'amount', value: 1 }))
        : dispatch(
            cartActions.changeItems({
              id: id,
              key: 'amount',
              value: +event.target.value,
            })
          );
    }
  };

  const amountIncreaseHandler = event => {
    event.preventDefault();
    if (amount === 99) {
      dispatch(cartActions.changeItems({ id: id, key: 'amount', value: 99 }));
      // todo: 에러 UI 추가
      // cartContext.errorMessageHandler('inputValueExceeded');
    } else {
      dispatch(
        cartActions.changeItems({ id: id, key: 'amount', value: amount + 1 })
      );
    }
  };

  const amountDecreaseHandler = event => {
    event.preventDefault();
    dispatch(
      cartActions.changeItems({ id: id, key: 'amount', value: amount - 1 })
    );
  };

  const checkboxHandler = () => {
    dispatch(
      cartActions.changeItems({ id: id, key: 'isChecked', value: !isChecked })
    );
  };

  useEffect(() => {
    setIsBtnValid(amount > 1);
  }, [amount]);

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
    </li>
  );
};

export default CartItem;
