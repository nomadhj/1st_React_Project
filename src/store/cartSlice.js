import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemList: [],
    totalPrice: 0,
    isCheckAll: true,
  },
  reducers: {
    itemListHandler(state, action) {
      state.itemList = action.payload;
    },
    addItems(state, action) {
      const { newItem, amount } = action.payload;
      const existingItem = state.itemList.find(item => item.id === newItem.id);

      if (!existingItem) state.itemList.push(newItem);
      else existingItem.amount += amount;

      state.totalPrice = calculateTotalPrice(state.itemList);
    },
    changeItems(state, action) {
      const { id, key, value } = action.payload;
      const changedItem = state.itemList.find(item => item.id === id);
      changedItem[key] = value;

      state.totalPrice = calculateTotalPrice(state.itemList);
    },
    deleteItems(state) {
      state.itemList = state.itemList.filter(item => !item.isChecked);

      state.totalPrice = calculateTotalPrice(state.itemList);
    },
    orderItems(state, action) {
      const value = action.payload;
      let orderedItemList = [];
      const checkedItemList = state.itemList.filter(item => item.isChecked);
      if (state.itemList.length === 0) {
        alert('상품을 선택해 주세요.');
        return;
      }
      ORDER.forEach(obj => {
        if (value === obj.button) {
          if (obj.button === 'orderSelected' && checkedItemList.length === 0) {
            alert('상품을 선택해 주세요.');
          } else {
            orderedItemList = obj.isOrderAll
              ? [...state.itemList]
              : [...checkedItemList];

            alert(obj.message);
            return orderedItemList;
          }
        }
      });
    },
    checkAllHandler(state, action) {
      const value = action.payload;
      state.itemList.forEach(item => (item.isChecked = value));
      state.isCheckAll = value;

      state.totalPrice = calculateTotalPrice(state.itemList);
    },
  },
});

const calculateTotalPrice = itemList => {
  return itemList.reduce((acc, obj) => {
    return (acc += obj.isChecked ? obj.amount * obj.price : 0);
  }, 0);
};

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

export const cartActions = cartSlice.actions;

export default cartSlice;
