import React, { useState, useCallback, useEffect } from 'react';
import API from '../config';

const CartContext = React.createContext({
  itemList: [],
  errorMessage: '',
  totalCheckboxisChecked: true,
  totalPrice: 0,
  length: 0,
  addItems: (item, amount) => {},
  changeItems: (id, key, value) => {},
  deleteItems: () => {},
  errorMessageHandler: value => {},
  totalCheckboxHandler: () => {},
  orderItems: (id, value) => {},
});

export const CartContextProvider = props => {
  const { children } = props;
  const [itemList, setItemList] = useState([]);
  const [apiKeyTable, setApiKeyTable] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [totalCheckboxisChecked, setTotalCheckboxisChecked] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItems = (item, amount) => {
    if (!apiKeyTable[item.id]) {
      fetch(API.carts + '.json', {
        method: 'POST',
        body: JSON.stringify({
          id: item.id,
          name: item.name,
          price: +item.price,
          amount: +amount,
          src: item.img,
          isChecked: true,
        }),
      })
        .then(getFetchItems())
        .catch(error => setErrorMessage(error.message));
    } else {
      const filteredItem = itemList.filter(element => element.id === item.id);
      const originAmount = filteredItem[0].amount;
      changeItems(item.id, 'amount', originAmount + amount);
    }
  };

  const changeItems = async (id, key, value) => {
    try {
      const response = await fetch(
        API.carts + `/${apiKeyTable[id.toString()]}.json`,
        {
          method: 'PATCH',
          body: JSON.stringify({ [key]: value }),
        }
      );
      if (response.ok) getFetchItems();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const deleteItems = () => {
    itemList.forEach(item => {
      if (item.isChecked) {
        fetch(API.carts + `/${apiKeyTable[item.id]}.json`, {
          method: 'DELETE',
        })
          .then(() => {
            delete apiKeyTable[item.id];
            getFetchItems();
          })
          .catch(error => setErrorMessage(error.message));
      }
    });
  };

  const errorMessageHandler = value => {
    setErrorMessage(value);
  };

  const totalCheckboxHandler = value => {
    itemList.forEach(item => {
      fetch(API.carts + `/${apiKeyTable[item.id]}.json`, {
        method: 'PATCH',
        body: JSON.stringify({ isChecked: value }),
      })
        .then(() => {
          setTotalCheckboxisChecked(value);
          getFetchItems();
        })
        .catch(error => setErrorMessage(error.message));
    });
  };

  const orderItems = value => {
    let orderedItemList = [];
    const checkedItemList = itemList.filter(item => item.isChecked);
    if (itemList.length === 0) {
      setErrorMessage('nothingSelected');
      return;
    }
    ORDER.forEach(obj => {
      if (value === obj.button) {
        if (obj.button === 'orderSelected' && checkedItemList.length === 0) {
          setErrorMessage('nothingSelected');
        } else {
          orderedItemList = obj.isOrderAll
            ? [...itemList]
            : [...checkedItemList];

          alert(obj.message);
          return orderedItemList;
        }
      }
    });
  };

  const getFetchItems = useCallback(async () => {
    try {
      const response = await fetch(API.carts + '.json', {});
      if (!response.ok) {
        throw new Error('상품을 불러오는 과정에서 문제가 발생했습니다.');
      }
      const data = await response.json();
      const tempArr = [];
      const tempObj = {};
      for (const key in data) {
        tempObj[data[key].id] = key;
        tempArr.push(data[key]);
      }
      setApiKeyTable(tempObj);
      setItemList(tempArr);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []);

  useEffect(() => {
    getFetchItems();
  }, [getFetchItems, itemList.length]);

  useEffect(() => {
    const totalPrice = itemList.reduce((acc, obj) => {
      return (acc += obj.isChecked ? obj.amount * obj.price : 0);
    }, 0);
    setTotalPrice(totalPrice);
  }, [itemList]);

  const cartContext = {
    itemList,
    errorMessage,
    totalCheckboxisChecked,
    totalPrice,
    length: itemList.length,
    addItems,
    changeItems,
    deleteItems,
    errorMessageHandler,
    totalCheckboxHandler,
    orderItems,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;

const ORDER = [
  {
    button: 'orderSelected',
    message: '선택한 상품을 주문합니다.',
    isOrderAll: false,
  },
  {
    button: 'orderAll',
    message: '전체 상품을 주문합니다.',
    isOrderAll: true,
  },
];
