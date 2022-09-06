import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../../../Context/authContext';
import Button from '../../../../../components/UI/Button';
import { cartActions } from '../../../../../store/cartSlice';
import './AddToCartModal.scss';

const AddToCartModal = ({ setCartModal, amount, product }) => {
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const itemAddHandler = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: +product.price,
      amount: +amount,
      src: product.img,
      isChecked: true,
    };
    dispatch(
      cartActions.addItems({
        newItem: item,
        amount,
      })
    );
    setCartModal(false);
    alert('장바구니에 물건이 담겼습니다.');

    // todo: 에러 UI 추가
    // if (!cartContext.errorMessage) {
    //   setCartModal(false);
    //   alert('장바구니에 물건이 담겼습니다.');
    // }
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      
      overflow: hidden;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const modalComponent = (
    <div className="addToCartModal">
      <div className="cartModalContainer">
        {authContext.isLoggedIn && (
          <>
            <p className="cartTitle">장바구니에 담기</p>
            <div className="buttonArea">
              <Button btnFunction={setCartModal.bind(null, false)}>취소</Button>
              <Button bgStyle="green" btnFunction={itemAddHandler}>
                확인
              </Button>
            </div>
          </>
        )}
        {!authContext.isLoggedIn && (
          <>
            <p className="cartTitle">로그인이 필요합니다.</p>
            <div className="buttonArea">
              <Button btnFunction={setCartModal.bind(null, false)}>취소</Button>
              <Button
                bgStyle="green"
                btnFunction={navigate.bind(null, '/login')}
              >
                로그인
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  const targetNode = document.getElementById('modal');

  return <>{createPortal(modalComponent, targetNode)}</>;
};

export default AddToCartModal;
