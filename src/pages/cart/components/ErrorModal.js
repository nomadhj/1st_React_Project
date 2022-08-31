import { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import CartContext from '../../../Context/cartContext';

import './ErrorModal.scss';

const ErrorModal = () => {
  const cartContext = useContext(CartContext);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const modalComponent = (
    <div className="backdrop">
      <div className="errorModal">
        <div>
          <p>{ERROR[cartContext.errorMessage]}</p>
          <button
            onClick={() => {
              cartContext.errorMessageHandler('');
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );

  const targetNode = document.getElementById('modal');

  return <>{createPortal(modalComponent, targetNode)}</>;
};

export default ErrorModal;

const ERROR = {
  inputValueExceeded: '더이상 숫자를 늘릴 수 없습니다.',
  nothingSelected: '선택한 상품이 없습니다.',
};
