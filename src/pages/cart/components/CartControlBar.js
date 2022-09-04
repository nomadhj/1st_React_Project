import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartSlice';
import './CartControlBar.scss';

const CartControlBar = () => {
  const totalCheckboxisChecked = useSelector(state => state.cart.isCheckAll);
  const dispatch = useDispatch();

  const checkboxHandler = event => {
    dispatch(cartActions.checkAllHandler(event.target.checked));
  };

  const deleteItemhandler = () => {
    dispatch(cartActions.deleteItems());
  };

  return (
    <div className="cartCheck">
      <div className="checkBoxWrapper">
        <input
          id="checkAll"
          type="checkbox"
          checked={totalCheckboxisChecked}
          onChange={checkboxHandler}
        />
        <label htmlFor="checkAll">
          <div>
            <img src="/images/iconCheckWhite.png" alt="iconCheck" />
          </div>
          전체선택
        </label>
      </div>
      <button className="selectedItemDeleteBtn" onClick={deleteItemhandler}>
        선택 삭제
      </button>
    </div>
  );
};

export default CartControlBar;
