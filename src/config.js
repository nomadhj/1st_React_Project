const BASE_URL = 'https://react-project-7ee5d-default-rtdb.firebaseio.com';

const API = {
  signup: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
  login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
  productlist: `${BASE_URL}/productlist`,
  product: `${BASE_URL}/product`,
  carts: `${BASE_URL}/carts`,
};

export default API;
