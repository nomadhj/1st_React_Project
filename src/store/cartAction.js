import API from '../config';
import { cartActions } from './cartSlice';

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(API.carts + '.json');
      if (!response.ok) throw new Error('데이터를 가져오는데 실패했습니다.');
      const data = await response.json();
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(cartActions.itemListHandler(data || []));
    } catch (error) {
      // todo: 에러 UI 추가
    }
  };
};

export const sendCartData = itemList => {
  return async dispatch => {
    const sendData = async () => {
      const response = await fetch(API.carts + '.json', {
        method: 'PUT',
        body: JSON.stringify(itemList),
      });
      if (!response.ok) throw new Error('데이터를 송부하는데 실패했습니다.');
    };

    try {
      await sendData();
    } catch (error) {
      // todo: 에러 UI 추가
    }
  };
};
